function Titles(title) {
  this.backupTitle = document.title;
  document.title = (title)? title: document.title;
  this.prototype = {
    backupTitle: "",
    set: function (title){
      this.backupTitle = document.title;
     document.title = (title)? title: document.title;
    },
    backup: function (){
      this.backupTitle = document.title;
    },
    recover: function () {
      document.title = this.backupTitle;
    }
  }
}