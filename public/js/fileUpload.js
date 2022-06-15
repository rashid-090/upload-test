FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 13 / 30,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150
    })
    
FilePond.parse(document.body)


//    stylePanelAspectRatio: 13 / 50,