module.exports = function toReadable (number) {
    let fullString = '';

    let arr = number.toString(10).split('').map(Number);

    const units = [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine'
    ];

    const between = [
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen'
    ]

    const dozens = [
        'ten',
        'twenty',
        'thirty',
        'forty',
        'fifty',
        'sixty',
        'seventy',
        'eighty',
        'ninety'
    ]

    if (number == 0){
        return 'zero';
    }

    for (let i = 0; i <= arr.length; i++){
        if (number > 0 && number < 10){
            fullString = units[number-1];
        } else if (arr.length == 3){
            fullString += units[(Math.floor(number/100) % 10)-1] + ' hundred';
            if (arr[1] == 0 && arr[2]==0){
                break;
            }
            arr.shift();
        } else if (arr.length == 2){
            if (arr[0]==0){
                fullString = fullString;
                arr.shift();
                i--;
            } else {
                if (arr[0] == 1 && arr[1] != 0){
                    if (fullString == ''){
                        fullString += between[arr[1]-1];
                        arr.shift();
                    } else {
                        fullString += ' ' + between[arr[1]-1];
                        arr.shift();
                    }
                    break;
                } else {
                    if (fullString == ''){
                        fullString+= dozens[(Math.floor(number/10)%10)-1]
                        arr.shift();
                        i--;
                    } else {
                        fullString+= ' ' + dozens[(Math.floor(number/10)%10)-1]
                        arr.shift();
                        i--;
                    }
                }
            }
        } else if (arr.length == 1){
            if(arr[0] == 0){
                break;
            } else {
                if (fullString == ''){
                    fullString += units[arr[0]-1]
                } else {
                    fullString +=' ' + units[arr[0]-1]
                    arr.shift();
                }
            }
        }
    }
    return(fullString);
}
