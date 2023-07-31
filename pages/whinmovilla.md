---
layout: page
title: whinmovilla
permalink: /whinmovilla
---

# whinmovilla

## **Manual del integrador**



## Concepto **Slots**

- Son cada uno de los robots que ejecutarán whatsapp de forma independiente.
- Tienen asociado un código alfanumérico único  ocho caracteres.
- Cada slot estará siempre en uno (y solo uno) de los siguientes estados: available, sleeping y active.
  - “available” significa que el slot está listo para ser usado a través de un proceso de enrolado de línea.
  - “active” significa que el robot está asignado a una línea de teléfono y está funcionando activamente con envío y recepción de mensajes.
  - “sleeping” significa que el robot está asignado a una línea de teléfono pero ha sido puesta en modo pausa de forma voluntaria.


## Concepto **Líneas**

- Una línea corresponde a un número de teléfono móvil. 
- La línea debe estar registrada en Whatsapp bien como “personal” o como “business”.
- El usuario deberá tener un cliente de Whatsapp instalado en un terminal móvil para poder realizar el proceso de enrolado.
- El proceso de enrolado consiste en asignar, de forma biunívoca, una línea de teléfono a un slot disponible en el sistema.
- Cada línea podrá tener asignado un solo slot y, simétricamente, cada slot podrá estar asignado a una sola línea.
- Una misma linea no puede estar asociada a varios slots. Si una linea ya asociada, se enrolase a un slot nuevo, automáticamente se desenrolaría del primero.


## Llamadas al API del sistema

- **URL base:**
  - https://apinmovilla.inutil-labs.com/

- **Seguridad:**
  Inicialmente se establece una cabecera tipo “Bearer token“ para el acceso al API que será entregada por un canal seguro y que deberá formar parte de todas las peticiones que se realicen al API.

- **Sintaxis:**
  Con carácter general, las llamadas tipo GET que requieran parámetros los recibirán el la ruta tipo /endpoint/:param1/:param2.
  Para las llamadas tipo POST, los datos enviados estarán en formato JSON.
  Las líneas de teléfono (lines) irán siempre con código internacional pero sin el signo '+', ejemplo: 34666123456


## Slot management endpoints


| Endpoint | Params/Data | Returns |
| -------- | ----------- | ----------- |
| /slots | <none> | Devuelve un vector de pares JSON clave/valor listando todos los slots disponibles en el sistema y su estado actual. |
| /slots | /:status |  Devuelve un vector de pares JSON clave/valor listando todos los slots en el estado seleccionado. |
| /enroll | /:slotid | Devuelve un objeto JSON donde la clave "qr" ccontiene una cadena b64 del código QR a renderizar. |
| /sleep | /:line | Especificada una línea en "line", la llamada pondrá la línea en modo sleeping y devolverá un string "OK" en respuesta 200 o un 422 con una descripción del error si no se pudiera realizar. |
| /sleepid | /:slot | Especificado un slot en "slot", la llamada pondrá la línea asociada al slot especificado en modo sleeping y devolverá un string "OK" en respuesta 200 o un 422 con una descripción del error si no se pudiera realizar la acción. |
| /resume | /:line | Especificada una línea en "line", la llamada comprobará si la línea está en modo sleeping y la "despertará" a modo active. Devolverá un string "OK" en respuesta 200 o un 422 con una descripción del error si no se pudiera realizar. |
| /resumeid | /:slot | Especificada un slot en "slot", la llamada comprobará si la línea asociada al slot especificado está en modo sleeping y la "despertará" a modo active. Devolverá un string "OK" en respuesta 200 o un 422 con una descripción del error si no se pudiera realizar. |
| /kill | /:line | Especificada una línea en "line", la llamada desvinculará la línea del slot al que estuivese asociada y borrará las credenciales y pares de claves existentes para el cifrado de mensajes. Devolverá un string "OK" en respuesta 200 o un 422 con una descripción del error si no se pudiera realizar. |
| /slots2lines | <none> | Devuelve el vector de pares JSON clave/valor listando todos los slots disponibles en el sistema y la linea asociada actualmente. |
| /lines2slots | <none> | Devuelve el vector de pares JSON clave/valor listando todas las lineas asociadas en el sistema y los slotid de cada una. |


## Messaging endpoints

### Consideraciones generales de mensajería.

- Las líneas enroladas pueden estar en estado active o sleeping. La interpretación de que una línea esté en estado sleeping es que se quiere evitar el servicio de mensajería en ese periodo de tiempo. Por tanto, ni se recibirán ni se enviarán mensajes desde de esa línea.
- Inutil-Labs no guardará copia de ningún mensaje enviado o recibido ni realizará ningún proceso de tratamiento de los mensajes. 
- Los mensajes recibidos por cualquiera de las líneas activas se entregarán a un endpoint único a definir por **inmovilla**.
- Los mensajes serán entregados como copias exactas de lo que llega de la red de whatsapp. Inutil-Labs no realizará alteraciones a los mensajes recibidos, incluyendo cambios de formato. Los mensajes están encapsulados en un formato JSON y la estructur de campos/sintaxis es la que la red de whatsapp entregue. La sintaxis no está documentada y puede ir cambiando.
- 
