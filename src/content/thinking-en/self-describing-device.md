---
title: "What a Self-Describing Device Actually Looks Like"
description: "If transport is solved, the next problem is meaning. Here is how a device must expose itself to be part of a real system."
pubDate: 2026-04-15
lang: "en"
slug: "self-describing-device"
translationKey: "self-describing-device"
draft: false
---

In the previous article, the argument was simple: we’ve mistaken the "pipe" for the product. LoRaWAN and NB-IoT solved transport, but they left the problem of **meaning** entirely to the end-user.

What would it actually look like if a device exposed its own meaning in a real system?

## Beyond Raw Payloads

Today, the status quo for LPWAN looks like this: A device sends `0x0A 0x3F 0x12`. Somewhere else—trapped in a PDF or a brittle JavaScript decoder—that hex string is translated into a temperature of 23.5°C and a valve position of 60%.

The problem isn't the data. 

**It’s that the logic required to understand the data lives outside the system.**

A self-describing device flips this script. It makes meaning a first-class citizen of the interface. It doesn't just send values; it sends context.

## Discovery: The "What Are You?" Factor

The first hallmark of a self-describing device is that it can answer a basic question without a manual: *What are you?*

In industrial legacy systems like **BACnet**, we call these "Objects." In **Zigbee**, we call them "Clusters." In modern Web APIs, we call them "Resources." Regardless of the name, the principle is the same: the device exposes a structured model of what it is and what it measures.

If a system cannot programmatically discover that a device has a "Flow Rate" sensor with a range of 0-100 L/min, that device is not an interoperable component—it’s just a proprietary endpoint.

## Stability Over Firmware Versions

We’ve all been there: a firmware update changes the payload offset by one byte, and the entire dashboard breaks.

A self-describing device offers a **stable data model**. "Temperature" shouldn't be a moving target dependent on a specific version of a vendor’s decoder. It should be a fixed resource with a predictable identifier. This is exactly what SunSpec did for Modbus; it turned a generic register into a guaranteed piece of information. Without this stability, every integration you build is essentially a countdown to the next breaking change.

## Explicit Capabilities and Behavior

Most IoT devices are treated as passive data-loggers. But real systems have **behavior**.

A self-describing device makes its capabilities explicit. It defines what can be read, what can be written (setpoints, modes), and what commands it can execute (reset, calibrate). Instead of an engineer having to reverse-engineer which hex command triggers a relay, the system should be able to ask the device: *What can you do?*—and receive a structured response.

## State, Quality, and Diagnostics

A raw value is useless if you don't know its pedigree. LPWAN data is notoriously "thin," often lacking the metadata required for serious logic. 

A self-describing device bundles state with **quality flags** and **operational modes**. It tells you if a value is "Current," "Estimated," or "In Error." It exposes diagnostics—fault conditions and warnings—as first-class data points rather than undocumented error codes. This allows the system to reason about the health of the hardware without human guesswork.

## The Counter-Argument: "But what about payload size?"

The immediate pushback from embedded engineers is usually: *"We can't send schemas over the air; the packets are too small."*

This is not a fundamental limitation. Being self-describing doesn't mean sending a 2KB JSON header over a 50-byte LoRaWAN window. It means using **compact, standardized identifiers** (like LwM2M Object IDs) or a **registry-based approach** where the device points to a versioned, machine-readable definition. 

The "pipe" can be small, but the "map" must be standardized.

## From Endpoints to Components

The industry spent years optimizing the network layer because it was the hardest technical challenge at the time. But that era is over. Connectivity is now a commodity. 

If we want to stop building fragile, one-off integrations, we have to raise the bar for the hardware. We need to stop treating devices as black boxes that emit mysterious pulses of data and start treating them as structured components of a larger system.

The difference between a "connected device" and a "system component" isn't the radio it uses. It’s the device's ability to be understood, managed, and integrated without a human acting as a permanent translator.

**Being "connected" is no longer the achievement. Being understandable is.**