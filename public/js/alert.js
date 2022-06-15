function submitForm(form) {
  swal({
    title: "Are you sure want to delete?",
    text: "This will not be undo",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  
  .then(function (isOkay) {
    if (isOkay) {
      form.submit();
    }
  });
  return false;
}