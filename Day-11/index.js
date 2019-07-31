const Palindrome = (kata) => {
    const karakter =
        kata.toLowerCase().replace(/[^a-z]/g, '')
        .split('');
    if (karakter.join('') ===
        karakter.reverse().join('')) {
        return true;
    } else {
        return false;
    }
}
const hasil = Palindrome("daLam");
console.log(hasil);

function palindrome(str){
    var reversekata = str.split('').reverse().join()
    if(str==reversekata){
        return true
    }else{
        return false
    }
} 