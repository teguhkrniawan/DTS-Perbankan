class Suhu{

    reamurToCelcius(temperature){
        return 5 * temperature / 4;
    }

    reamurToFarenheit(temperature){
        return (2.25 * temperature) + 32;
    }

    celciusToFarenheit(temperature){
        return (1.8 * temperature) + 32;
    }

    celciusToReamur(temperature){
        return (4 * temperature / 5);
    }

    farenheitToCelcius(temperature){
        return 5 * (temperature - 32) / 9;
    }

    farenheitToReamur(temperature){
        return 4 * (temperature-32) / 9;
    }

}

module.exports = Suhu;