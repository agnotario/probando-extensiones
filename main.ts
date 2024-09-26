/**
 * Provides access to basic micro:bit functionality.
 */

//% color=190 weight=100 icon="\uf086" block="LLM Chat"
namespace LLMChat {
    //%blockId=SendToAPI
    //% block="Send data to API: $data"
    export function sendToAPI(data: string): void {
        // Aquí colocarás la lógica para enviar datos
        console.log("Data sent to API: " + data);
    }

    //% block="Configurar WiFi SSID: $ssid Contraseña: $password"
    //% ssid.shadow="text" password.shadow="text"
    export function configurarWiFi(ssid: string, password: string): void {
        console.log("Conectando a la WiFi: " + ssid);
    }

    //% block="Configurar API URL: $url Token: $token Modelo: $model"
    //% url.shadow="text" token.shadow="text" model.shadow="text"
    export function configurarAPI(url: string, token: string, model: string): void {
        console.log("Configurando API con URL: " + url + ", Token: " + token + ", Modelo: " + model);
    }

    //% block="Hacer una pregunta: $pregunta"
    //% pregunta.shadow="text"
    export function hacerPregunta(pregunta: string): void {
        console.log("Haciendo pregunta: " + pregunta);
    }

    //% block="Recibir respuesta"
    //% shim=receiveResponse
    export function recibirRespuesta(): string {
        let respuesta = "Esta es una respuesta simulada";
        console.log("Recibiendo respuesta: " + respuesta);
        return respuesta;
    }

}
