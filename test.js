"use strict";

const obj = { 
  test: function(){
    (function(){
      console.log(this);
    })(); //���������� ���������� ������� ������ ������ �������
  }
}

console.log(`Test data`);
obj.test(); // ��� �������, ��� � ������� ��������� obj. ��� ��������