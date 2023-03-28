const { cal_bmi} = require('./bmi')


test('17kg = Underweight',()=>{
    expect (cal_bmi(17)).toBe('UnderWeight')
})

test('20kg = Normal',()=>{
    expect (cal_bmi(20)).toBe("Normal")
})

test('30kg = Overweight',()=>{
    expect (cal_bmi(30)).toBe("Overweight")
})