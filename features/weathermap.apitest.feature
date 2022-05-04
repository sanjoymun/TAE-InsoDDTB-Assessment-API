Feature: WeatherAPI Test
    This feature is to validate POST & GET request
  
  Background: Delete stations to be newly registered
    Given My API Key is "c9d3d323d5a7cfcb89d4275993c11f06"
    Given I delete the weather station having external_id as
    | external_id   |
    | DEMO_TEST001  |
    | DEMO_TEST002  |
  
  @scenario1
  Scenario Outline: Scenario Outline name: POST request to regsiter a weather station without API Key
    Given My API Key is ""
    When I send a POST request with the body as 
      """
      {
        "external_id": "<external_id>",
        "name": "<name>",
        "latitude": <latitude>,
        "longitude": <longitude>,
        "altitude": <altitude>
        }

      """
    Then I should see the error reponse as 
      """
        {
        "cod": 401,
        "message": "Invalid API key. Please see http://openweathermap.org/faq#error401 for more info."
        }

     """
    Examples:
        |   external_id   |   name                        |   latitude    |   longitude   |   altitude    |
        |   DEMO_TEST001  |   Team Demo Test Station 001  |   33.33       |    -122.43    |   222         |
  
  @scenario2
  Scenario Outline: Scenario Outline name: POST request to regsiter weather stations with valid API Key
    Given My API Key is "c9d3d323d5a7cfcb89d4275993c11f06"
    When I send a POST request with the body as 
      """
      {
        "external_id": "<external_id>",
        "name": "<name>",
        "latitude": <latitude>,
        "longitude": <longitude>,
        "altitude": <altitude>
        }

      """
    Then I should see the HTTP response code as 201
    Examples:
        |   external_id   |   name                        |   latitude    |   longitude   |   altitude    |
        |   DEMO_TEST001  |   Team Demo Test Station 001  |   33.33       |    -122.43    |   222         |
        |   DEMO_TEST002  |   Team Demo Test Station 002  |   44.44       |    -122.44    |   111         |
  
  @scenario3
  Scenario Outline: Scenario Outline name: GET request to verify newly registered weather station details
    Given My API Key is "c9d3d323d5a7cfcb89d4275993c11f06"
    When I send a GET request for the newly regsitered station no.<serial_no> using internal ID captured during POST request
    Then I should see that the station was successfully stored in the DB and values are the same as specified
    """
      {
        "external_id": "<external_id>",
        "name": "<name>",
        "latitude": <latitude>,
        "longitude": <longitude>,
        "altitude": <altitude>
        }
      """ 
    Examples:
        | serial_no |   external_id   |   name                        |   latitude    |   longitude   |   altitude    |
        | 1         |   DEMO_TEST001  |   Team Demo Test Station 001  |   33.33       |    -122.43    |   222         |
        | 2         |   DEMO_TEST002  |   Team Demo Test Station 002  |   44.44       |    -122.44    |   111         |