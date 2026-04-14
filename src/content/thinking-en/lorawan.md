---
title: "LoRaWAN Solved Transport. We Still Haven't Solved Meaning."
description: "Why LPWANs are failing the interoperability test that BACnet and SunSpec passed decades ago."
pubDate: 2026-04-14
lang: "en"
slug: "lorawan"
translationKey: "lorawan"
draft: false
---

Every time LoRaWAN comes up in a meeting, the conversation feels stuck in 2015. We talk about kilometric range and 10-year battery lives as if they were still the primary hurdles. 

They aren't. 

LoRaWAN—and its cellular cousin NB-IoT—are feats of engineering that solved the "pipe" problem. But we’ve mistaken the transport for the product. We’ve perfected how to move bytes, but we’re still failing at what those bytes actually mean.

## The Transport Trap

This isn’t just a LoRaWAN issue. **NB-IoT** faces the exact same identity crisis. NB-IoT proves that even when you fix the spectrum, the coverage, and the reliability, the system problem remains untouched. 

Whether the packet travels over a LoRa gateway or a cellular base station, the result is the same: a 12-byte hex string arrives at your server, and the "standard" evaporates. You’re left bridging the gap between the hardware and your system, writing custom decoders for every new sensor you buy. 

## Lessons from the Old Guard: BACnet and Zigbee

We don't have to reinvent the wheel; we just have to look at how building automation actually works. 

Take **BACnet**. When you buy a BACnet-compliant chiller, you don't ask the vendor for a payload manual. You "discover" the device, and it presents **Objects**—Analog Inputs for temperature, Binary Outputs for a fan. The protocol defines not just how to communicate, but *what exists*.

Even **Zigbee** introduced **Cluster Libraries**, where behavior is standardized at the application layer. A lightbulb and a switch from different vendors can interoperate because they share the same model of "On/Off".

In the LPWAN world, we have "transceivers," but we don't have "objects." This is not a network failure; it is a device ecosystem failure.

## The "SunSpec" Missing Link

Look at what happened to **Modbus**. For decades, Modbus was the "Wild West"—total transport, zero semantics. Every manufacturer had a different register map. 

Then came **Modbus SunSpec**. They didn't replace Modbus; they just defined a shared language on top of it for the solar industry. If a device is SunSpec-compliant, you know exactly which register holds the AC Power value without opening a PDF.

**LoRaWAN is desperately waiting for its SunSpec moment.** Instead, we are stuck in a world where "compatibility" just means we can hit the same tower. We’ve standardized the envelope, but every manufacturer is writing their letter in a different secret code.

## The Integration Tax

This is where the "low cost" of LPWAN starts to bleed money. If you’re building a real system—not just a one-off demo—you end up paying a permanent "integration tax."

You aren't just data-logging; you’re reverse-engineering. You’re maintaining a fragile middle-layer of JavaScript decoders that break the second a vendor updates their firmware. We’ve optimized the airwaves, but we’ve shifted all the complexity (and cost) to the software engineers who have to make sense of the mess.

## The Takeaway

If you’re still evaluating LPWAN solutions based on range and battery life, you’re optimizing the wrong layer. The field network is just the plumbing. 

If you’re building a serious IoT stack in 2026, stop asking how far the signal goes and start asking:

1. **Does this device have a self-describing data model?**
2. **Can my system ingest this data without a line of custom "translator" code?**
3. **Is this a "connected device," or a coherent system?**

LoRaWAN and NB-IoT gave us the connection. Now, it's our job to finally give it some sense.