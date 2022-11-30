// reusable-module.js

/**
 * @params {string} path 0번째 매개변수(arguments[0])
 * @params {function} callback 1번째 매개변수(arguments[1])
 * @return {object} 호출되는 즉시 객체 타입으로 반환
 *
 * @callbackparams[0] {object} callback 함수는 인자로 object를 받도록 설계되어 있습니다.
 * @description 해당 모듈(함수)은 파일 목록을 읽어내 값이 문자열(string)로 이루어진 객체형태로 사용하기 위해 만들어졌습니다.
 */

module.exports = function (pathString, callback) {
  const fs = require("fs");
  // 사용자에 따라 path 내장 모듈을 사용할 것을 고려해 import
  const path = require("path");
  fs.readdir(pathString, "utf-8", (err, fileName) => {
    if (err) throw err;
    // for return: result
    const result = {};
    const data = [];
    // console.log(fileName)
    fileName.map((value) => {
      data.push(value.split(".")[0]);
    });
    data.forEach((value) => {
      result[value] = value;
    });
    console.log("data", data);
    console.log("result", result);
    callback(result);
    return result;
  });
};
