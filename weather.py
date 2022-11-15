weather = getWeather(lat, lon)
        #get the temperature information using API
        temp = getTemp(lat, lon)

        if weather is None or temp is None:
            return jsonify({'error': 'No data available for this location.'})

        return jsonify({'location': {'name': name}, 'weather': {'description': weather['weather_descriptions'][0], 'temperature': round(temp['temp'] * 9/5 - 459.67), 'feelslike_temperature': round(temp['app_temp'] * 9/5 - 459.67), 'humidity': round((100*float(weather["humidity"]))), "wind": {"speed": float(weather["wind_speed"])*2.2369362920544}}})

    except Exception as e:
         print("Error in getting the data from openweathermap")
         print (e)