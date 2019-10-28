export default {

  toDisplayDateString: function (time) {
    if (this.isNullOrUndefinedOrEmpty(time)) {
      return '';
    }
    let longTime;
    if (this.toType(time) === 'date') {
      longTime = time.getTime();
    } else if (this.toType(time) === 'number') {
      longTime = time;
    } else {
      return '';
    }
    let date = new Date(longTime + (8 * 60 * 60 * 1000)) // timezone +0800
    return date.toISOString().substr(0, 19).replace('T', ' ');
  },
  isNullOrUndefinedOrEmpty: function (arg, whitespaceAsEmpty) {
    if (arg === null || arg === undefined) {
      return true;
    }

    if (this.toType(arg) === 'object') {
      return JSON.stringify(arg) === "{}";
    } else if (this.toType(arg) === 'array') {
      return arg.length === 0;
    } else if (this.toType(arg) === "string") {
      if (whitespaceAsEmpty) {
        return arg.trim() === '';
      }
      return arg === '';
    }
  },
  toType: function (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

}

