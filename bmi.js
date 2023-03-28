const cal_bmi=(bmi)=>{
    if (bmi < 18.6) {
        return 'UnderWeight'
    }else if (bmi >= 18.6 && bmi < 24.9){
        return "Normal"
    }else{
        return "Overweight"
    }
}


module.exports={cal_bmi}