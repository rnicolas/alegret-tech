---
title: "Com és, realment, un dispositiu autodescriptiu?"
description: "Si el transport ja està resolt, el següent problema és el significat. Així és com s'ha d'exposar un dispositiu per formar part d'un sistema real."
pubDate: 2026-04-15
lang: "ca"
slug: "self-describing-device"
translationKey: "self-describing-device"
draft: false
---

A l'article anterior, l'argument era senzill: hem confós la "canonada" amb el producte. LoRaWAN i NB-IoT han resolt el transport, però han deixat el problema del **significat** totalment en mans de l'usuari final.

Això ens planteja una pregunta pràctica: quin aspecte tindria, realment, un dispositiu que exposés el seu propi significat? No en un llibre blanc acadèmic, sinó en un sistema de producció real.

## Més enllà de la càrrega útil

Avui dia, l'estat de l'art a les LPWAN és aquest: un dispositiu envia `0x0A 0x3F 0x12`. En algun lloc extern —atrapat en un PDF o en un descodificador de JavaScript fràgil— aquesta cadena hexadecimal es tradueix en una temperatura de 23,5 °C i una posició de vàlvula del 60%.

El problema no són les dades. 

**El problema és que la lògica necessària per entendre les dades viu fora del sistema.**

Un dispositiu autodescriptiu capgira aquest escenari. Fa que el significat sigui un ciutadà de primera classe de la interfície. No es limita a enviar valors; envia context.

## Descoberta: el factor "Què ets?"

La primera característica d'un dispositiu autodescriptiu és que pot respondre una pregunta bàsica sense necessitar un manual: *Què ets?*

En els sistemes industrials llegats com **BACnet**, en diem "Objectes". A **Zigbee**, en diem "Clusters". En les API web modernes, en diem "Recursos". Independentment del nom, el principi és el mateix: el dispositiu ha d'exposar un model estructurat de què és i què mesura.

Si un sistema no pot descobrir programàticament que un dispositiu té un sensor de "Cabal" amb un rang de 0-100 L/min, aquest dispositiu no és un component interoperable; és només un punt final (endpoint) propietari.

## Estabilitat malgrat les versions de firmware

Tots hi hem passat: una actualització de firmware mou el *payload offset* un sol byte i tot el tauler de control (dashboard) deixa de funcionar.

Un dispositiu autodescriptiu ofereix un **model de dades estable**. La "Temperatura" no hauria de ser un objectiu mòbil que depengui d'una versió específica del descodificador d'un fabricant. Hauria de ser un recurs fix amb un identificador predictible. Això és exactament el que va fer SunSpec per a Modbus: va convertir un registre genèric en una peça d'informació garantida. Sense aquesta estabilitat, cada integració que construeixes és, en essència, un compte enrere cap a la següent ruptura del sistema.

## Capacitats i comportament explícits

La majoria de dispositius IoT es tracten com a simples registradors de dades passius. Però els sistemes reals tenen **comportament**.

Un dispositiu autodescriptiu fa que les seves capacitats siguin explícites. Defineix què es pot llegir, què es pot escriure (consignes, modes) i quines ordres pot executar (reinici, calibratge). En lloc que un enginyer hagi de fer enginyeria inversa per saber quina ordre hexadecimal activa un relé, el sistema hauria de poder preguntar al dispositiu: *Què pots fer?* —i rebre una resposta estructurada.

## Estat, qualitat i diagnòstic

Un valor brut és inútil si no en coneixes el llinatge. Les dades LPWAN són famoses per ser "primes", sovint mancades de les metadades necessàries per a una lògica seriosa.

Un dispositiu autodescriptiu agrupa l'estat amb **etiquetes de qualitat** i **modes operatius**. Et diu si un valor és "Actual", "Estimat" o "Erroni". Exposa el diagnòstic —condicions de falla i advertències— com a dades de primera línia, no com a codis d'error indocumentats. Això permet que el sistema raoni sobre l'estat del maquinari sense haver de jugar a endevinar.

## El contraargument: "Però, què passa amb la mida del payload?"

La resposta immediata dels enginyers de *firmware* sol ser: *"No podem enviar esquemes per l'aire; els paquets són massa petits."*

Això no és una limitació fonamental. Ser autodescriptiu no significa enviar una capçalera JSON de 2 KB a través d'una finestra de LoRaWAN de 50 bytes. Significa utilitzar **identificadors compactes i estandarditzats** (com els IDs d'objecte de LwM2M) o un **enfocament basat en registres** on el dispositiu apunta a una definició versionada i llegible per màquines.

La "canonada" pot ser petita, però el "mapa" ha d'estar estandarditzat.

## De punts finals a components

La indústria ha passat anys optimitzant la capa de xarxa perquè era el repte tècnic més difícil del moment. Però aquesta era s'ha acabat. La connectivitat és ara una *commodity*.

Si volem deixar de construir integracions fràgils i a mida, hem d'apujar el llistó del maquinari. Hem de deixar de tractar els dispositius com a caixes negres que emeten polsos misteriosos de dades i començar a tractar-los com a components estructurats d'un sistema més gran.

La diferència entre un "dispositiu connectat" i un "component de sistema" no és la ràdio que fa servir. És la capacitat del dispositiu de ser entès, gestionat i integrat sense que un humà hagi de fer de traductor permanent.

**Estar "connectat" ja no és la fita. Ser comprensible, sí.**