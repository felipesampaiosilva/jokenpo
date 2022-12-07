// Librarys
#include <WiFi.h>
#include <HTTPClient.h>
#include <Arduino_JSON.h>
// WIFI info
const char* ssid = "Inteli-COLLEGE";
const char* password = "QazWsx@123";

//Your Domain name with URL path or IP address with path
String serverName = "https://cje4lw-3061.preview.csb.app/teste";

unsigned long lastTime = 0;

unsigned long timerDelay = 5000;

int ledAzul = 15;
int LedVermelho = 16;
// int redLed = 17;

void setup() {
  pinMode(ledAzul, OUTPUT);
  pinMode(LedVermelho, OUTPUT);
  // pinMode(redLed, OUTPUT);

  Serial.begin(115200);

  WiFi.begin(ssid, password);

  Serial.println("Connecting");

  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }

  Serial.println("");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
  Serial.println("Timer set to 5 seconds (timerDelay variable), it will take 5 seconds before publishing the first reading.");
}
void loop() {
  //Send an HTTP POST request every 10 minutes
  if ((millis() - lastTime) > timerDelay) {
    //Check WiFi connection status
    if (WiFi.status() == WL_CONNECTED) {
      HTTPClient http;
      String serverPath = serverName;
      // Your Domain name with URL path or IP address with path
      http.begin(serverPath.c_str());

      // Send HTTP GET request
      int httpResponseCode = http.GET();
      if (httpResponseCode > 0) {

        String payload = http.getString();

        JSONVar myObject = JSON.parse(payload);
        JSONVar keys = myObject.keys();

        int jogador1 = int(myObject[keys[0]]);
        int jogador2 = int(myObject[keys[1]]);
        int empate = int(myObject[keys[2]]);

        Serial.println(jogador1);
        Serial.println(jogador2);
        Serial.println(empate);

          if(jogador1 == 1) {
            digitalWrite(ledAzul, HIGH);
          } else {
            digitalWrite(ledAzul, LOW);
          }
          if(empate == 1) {
            digitalWrite(LedVermelho, HIGH);
          } else {
            digitalWrite(LedVermelho, HIGH);
          }
          if(jogador2 == 1) {
            digitalWrite(LedVermelho, LOW);
          } else {
            digitalWrite(LedVermelho, HIGH);
          }
        }
        else {
          Serial.print("Error code: ");
          Serial.println(httpResponseCode);
        }
        http.end();
      } else {
        Serial.println("WiFi Disconnected");
      }
      lastTime = millis();
    }
  }
}