function getMaxLessThanK(n,k){ 
    let max = 0;
    //n dizideki en büyük sayı, k: a&b nin kontrol edileceği üst sınır değeri, max: max bitwise AND değerini saklayacak değişken

    for(let a = 1; a <= n; a++){ //a nın değerini 1den n e kadar döner
        for(let b = a+1; b <= n; b++){ //b değerini a+1 den n e kadar döner,bu sayede a<b koşulu sağlanır
        let bw = (a & b); // & operatörü, a ve b nin bitwise AND değerini hesaplar
        (bw < k && bw > max) && (max = bw);
        }
    }
    return max;

}