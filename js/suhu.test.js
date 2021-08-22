
const Suhu = require('./suhu.js');
const suhu = new Suhu();

test('convert reamur to celcius', () => {
    expect(suhu.reamurToCelcius(4)).toBe(5);
})

test('convert reamur to farenheit', () => {
    expect(suhu.reamurToFarenheit(0)).toBe(32);
})

test('celcius to farenheit', () => {
    expect(suhu.celciusToFarenheit(20)).toBe(68);
})

test('celcius to reamur', () => {
    expect(suhu.celciusToReamur(5)).toBe(4);
})

test('farenheit to celcius', () => {
    expect(suhu.farenheitToCelcius(68)).toBe(20)
})

test('farenheit to reamur', () => {
    expect(suhu.farenheitToReamur(32)).toBe(0)
})