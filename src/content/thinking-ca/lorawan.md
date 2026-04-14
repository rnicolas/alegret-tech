---
title: "LoRaWAN ha resolt el transport. Encara no hem resolt el significat."
description: "Per què les xarxes LPWAN estan suspenent el test d'interoperabilitat que BACnet i SunSpec van superar fa dècades."
pubDate: 2026-04-14
lang: "ca"
slug: "lorawan"
translationKey: "lorawan"
draft: false
---

Cada vegada que surt el tema de LoRaWAN en una reunió, la conversa sembla atrapada al 2015. Parlem d'abast quilomètric i de bateries que duren 10 anys com si encara fossin els principals obstacles.

No ho són.

LoRaWAN —i el seu cosí cel·lular NB-IoT— són fites de l'enginyeria que han resolt el problema de la "canonada". Però hem confós el transport amb el producte. Hem perfeccionat com moure bytes, però seguim fracassant a l'hora d'entendre què signifiquen realment aquests bytes.

## La trampa del transport

Això no és només un problema de LoRaWAN. **NB-IoT** s'enfronta exactament a la mateixa crisi d'identitat. L'NB-IoT demostra que, fins i tot quan soluciones l'espectre, la cobertura i la fiabilitat, el problema del sistema roman intacte.

Tant si el paquet viatja a través d'una passarel·la LoRa com d'una estació base cel·lular, el resultat és el mateix: una cadena hexadecimal de 12 bytes arriba al teu servidor i l'"estàndard" s'evapora. Et quedes sol salvant la distància entre el maquinari i el teu sistema, escrivint descodificadors personalitzats per a cada nou sensor que compres.

## Lliçons de la "vella guàrdia": BACnet i Zigbee

No cal reinventar la roda; només hem de mirar com funciona realment l'automatització d'edificis.

Fem un cop d'ull a **BACnet**. Quan compres una refredadora compatible amb BACnet, no demanes al fabricant un manual de càrrega útil (payload). "Descobreixes" el dispositiu i aquest presenta **Objectes**: entrades analògiques per a la temperatura, sortides binàries per a un ventilador. El protocol defineix no només com comunicar-se, sinó *què existeix*.

Fins i tot **Zigbee** va introduir les **Cluster Libraries**, on el comportament s'estandarditza a la capa d'aplicació. Una bombeta i un interruptor de diferents fabricants poden interoperar perquè comparteixen el mateix model d'"On/Off".

En el món LPWAN tenim "transceptors", però no tenim "objectes". Això no és un error de xarxa; és un fracàs de l'ecosistema de dispositius.

## La peça que falta: el moment "SunSpec"

Mireu què va passar amb **Modbus**. Durant dècades, Modbus va ser el "Far West": pur transport, zero semàntica. Cada fabricant tenia un mapa de registres diferent.

Llavors va aparèixer **Modbus SunSpec**. No van substituir Modbus; simplement van definir un llenguatge compartit per sobre del protocol per a la indústria solar. Si un dispositiu és compatible amb SunSpec, saps exactament quin registre conté el valor de la potència AC sense haver d'obrir cap PDF.

**LoRaWAN està esperant desesperadament el seu "moment SunSpec".** En canvi, estem atrapats en un món on la "compatibilitat" només vol dir que podem connectar-nos a la mateixa torre. Hem estandarditzat el sobre, però cada fabricant escriu la carta en un codi secret diferent.

## L'impost de la integració

Aquí és on el "baix cost" de les LPWAN comença a sagnar diners. Si estàs construint un sistema real —i no només una demo puntual— acabes pagant un "impost de integració" permanent.

No estàs només registrant dades; estàs fent enginyeria inversa. Mantens una capa intermèdia fràgil de descodificadors en JavaScript que es trenquen tan bon punt un fabricant decideix actualitzar el seu firmware. Hem optimitzat les ones de ràdio, però hem traslladat tota la complexitat (i el cost) als enginyers de programari, que han de donar sentit a tot aquest caos.

## La conclusió

Si encara estàs avaluant solucions LPWAN basant-te en l'abast i la durada de la bateria, estàs optimitzant la capa equivocada. La xarxa de camp és només la fontaneria.

Si estàs construint una infraestructura d'IoT seriosa el 2026, deixa de preguntar fins on arriba el senyal i comença a preguntar:

1. **Té aquest dispositiu un model de dades autodescriptiu?**
2. **Pot el meu sistema ingerir aquestes dades sense que jo hagi d'escriure ni una línia de codi de "traducció"?**
3. **Estic davant d'un "dispositiu connectat" o d'un sistema coherent?**

LoRaWAN i NB-IoT ens van donar la connexió. Ara, és la nostra feina donar-li, finalment, una mica de sentit.