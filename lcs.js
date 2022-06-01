var arg = process.argv.slice(2);

function lcs(arr){
    var prefix = arr.reduce((a, b) => a.length <= b.length ? a : b);
    var len = prefix.length;
    for (var i = len; i >= 0; i--){
        for (var j = 0; j <= (len - i); j++){       
            var substr = prefix.substring(j, j+i);
            if (arr.every(elem => ~elem.indexOf(substr))) {return substr;}
        }
    }
    return "";
}

if (arg.length == ""){
    console.log(""); 
} 
else {
    console.log(lcs(arg));
}