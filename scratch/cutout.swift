import Foundation
import CoreImage
import Vision
import AppKit

let inputPath = "/Users/sahil/2nd proj/public/images/basit-majeed.jpg"
let outputPath = "/Users/sahil/2nd proj/public/images/basit-majeed-cutout.png"

guard let inputURL = URL(string: "file://" + inputPath),
      let ciInput = CIImage(contentsOf: inputURL) else {
    print("Failed to load input image")
    exit(1)
}

let request = VNGeneratePersonSegmentationRequest()
request.qualityLevel = .accurate
request.outputPixelFormat = kCVPixelFormatType_OneComponent8

let handler = VNImageRequestHandler(ciImage: ciInput, options: [:])
do {
    try handler.perform([request])
    guard let mask = request.results?.first else {
        print("No mask generated")
        exit(1)
    }
    
    let maskPixelBuffer = mask.pixelBuffer
    let ciMask = CIImage(cvPixelBuffer: maskPixelBuffer)
    
    // Scale mask to input image size
    let scaleX = ciInput.extent.width / ciMask.extent.width
    let scaleY = ciInput.extent.height / ciMask.extent.height
    let scaledMask = ciMask.transformed(by: CGAffineTransform(scaleX: scaleX, y: scaleY))
    
    // Blend image with transparent background using the mask
    guard let filter = CIFilter(name: "CIBlendWithMask") else {
        print("Filter not found")
        exit(1)
    }
    
    let emptyImage = CIImage(color: CIColor(red: 0, green: 0, blue: 0, alpha: 0)).cropped(to: ciInput.extent)
    
    filter.setValue(ciInput, forKey: kCIInputImageKey)
    filter.setValue(emptyImage, forKey: kCIInputBackgroundImageKey)
    filter.setValue(scaledMask, forKey: kCIInputMaskImageKey)
    
    guard let outputCI = filter.outputImage else {
        print("Failed to blend")
        exit(1)
    }
    
    let context = CIContext(options: nil)
    guard let cgImage = context.createCGImage(outputCI, from: outputCI.extent) else {
        print("Failed to create CGImage")
        exit(1)
    }
    
    let rep = NSBitmapImageRep(cgImage: cgImage)
    guard let pngData = rep.representation(using: .png, properties: [:]) else {
        print("Failed to export PNG")
        exit(1)
    }
    
    try pngData.write(to: URL(fileURLWithPath: outputPath))
    print("Successfully created cutout at \(outputPath)")
} catch {
    print("Error performing segmentation: \(error)")
    exit(1)
}
