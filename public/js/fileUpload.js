FilePond.registerPlugin(
    FilePondPluginImagePreview,
    FilePondPluginImageResize,
    FilePondPluginFileEncode,
)

FilePond.setOptions({
    stylePanelAspectRatio: 30 / 50,
    imageResizeTargetWidth: 100,
    imageResizeTargetHeight: 150
  })
  
  FilePond.parse(document.body)

