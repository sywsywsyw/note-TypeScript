var myGirl = { sex: '女', skill: '爱我' };
console.log(myGirl);
var mySearch = function (source, subString) {
    var flag = source.search(subString);
    return flag != -1;
};
console.log(mySearch('高、富、帅、德', '胖'));
