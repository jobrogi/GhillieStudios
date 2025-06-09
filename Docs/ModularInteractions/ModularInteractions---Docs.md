# Modular Interactions Plugin

**Modular Interactions** is a flexible, Blueprint-compatible plugin for Unreal Engine 5 designed to simplify actor interactions with configurable widgets, timelines, and logic routing.

## Features Overview

| Feature                      | Description                                                                |
| ---------------------------- | -------------------------------------------------------------------------- |
| Modular Actor Base           | All interactables inherit from a common base with dynamic behavior support |
| Relay System                 | Remotely trigger other actors with relay components                        |
| Enum-Driven Routing          | Customize logic with EWidgetType and EActionType enums                     |
| Widget Preview System        | See widgets live in the editor via child actor previews                    |
| Animation Support            | Manually trigger interaction animations                                    |
| Enhanced Input Integration   | Fully compatible with UE5's Enhanced Input system                          |
| Timeline Movement            | Reusable built-in timeline actions (move/rotate/etc.)                      |
| Custom Widget Support        | Assign your own UMG classes to interactables                               |
| Blueprint-Only Compatibility | Full setup and customization available without C++                         |

## Getting Started

### 1. Enable the Plugin

Go to `Edit > Plugins`, search for **Modular Interactions**, and enable the plugin. Restart UE if needed.

### 2. Add the Component

Add `BP_InteractionHandlerComponent` to your player character. This component handles detection and interaction logic.

### 3. Place Interactable Actors

Use `AInteractableActorBase` for normal actors or `AInteractionRelayActor` for remote control setups.

## Blueprint Setup

### Base Actor Setup

- Inherit from `InteractableActorBase`
- Choose:

  - `EWidgetType` (e.g., Radial, Tooltip)
  - `EActionType` (e.g., ToggleActor, WidgetAction)

<pre><code>+ MyCustomTerminal (inherits InteractableActorBase)
+ MyTriggerButton (inherits InteractionRelayActor)</pre></code>

## Settings Overview (AInteractableActorBase)

| Property                   | Type                       | Default / Behavior                               | Condition                                       |
| -------------------------- | -------------------------- | ------------------------------------------------ | ----------------------------------------------- |
| bUseBuiltInAction          | `bool`                     | Enables internal logic system                    | Always visible                                  |
| ActionType                 | `EActionType`              | WidgetAction, ToggleActor, CustomEvent           | If bUseBuiltInAction                            |
| bUseAnimation              | `bool`                     | Enables animation properties                     | Always                                          |
| AnimationToPlay            | `UAnimMontage*`            | Your montage                                     | If bUseAnimation                                |
| WidgetType                 | `EWidgetType`              | Tooltip, RadialProgress, IconBasedPrompt, Custom | Visible unless relay actor                      |
| CustomWidgetClass          | `TSubclassOf<UUserWidget>` | Overrides default visuals                        | If WidgetType == CustomWidget                   |
| WidgetOffset               | `FVector`                  | Offset from actor position                       | Not shown if relay-controlled                   |
| WidgetScale                | `FVector`                  | Widget size scaling                              | ScreenSpace == World                            |
| InteractText / TooltipText | `FString`                  | Text for display                                 | Based on widget type                            |
| Icon                       | `UTexture2D*`              | For IconBasedPrompt                              | If WidgetType == IconBasedPrompt                |
| TargetActorToToggle        | `AActor*`                  | Actor to toggle                                  | If ActionType == ToggleActor                    |
| WidgetToOpen               | `TSubclassOf<UUserWidget>` | Widget opened by WidgetAction                    | ActionType == WidgetAction and not CustomWidget |

## Animation Events

| Event Name           | Trigger Time           | Purpose                                      |
| -------------------- | ---------------------- | -------------------------------------------- |
| Play Montage Request | On Interact Start      | Triggers animation manually                  |
| Montage Playing      | When montage starts    | Useful for logic like locking input          |
| Montage Completed    | When montage completes | Cleanup or finalize action (e.g., open door) |

These must be manually implemented in Blueprint.

## Relay Actor Overview

| Property               | Description                                  |
| ---------------------- | -------------------------------------------- |
| TargetActors           | List of actors to trigger                    |
| bTriggerAllTargets     | Triggers all actors or only the one by index |
| TargetIndexToTrigger   | Index used if not triggering all             |
| InteractableToAttachTo | Follows another actor                        |
| AttachmentMode         | SnapAll, KeepWorld, KeepRelative             |

### Relay Locks

| Ignored Setting       | Reason                                           |
| --------------------- | ------------------------------------------------ |
| ActionType            | Logic is forwarded to linked actor               |
| bControlledByOther... | Relays are always the controller, not controlled |

## Creating Custom Actors

1. Right-click → Blueprint Class → Search: `InteractableActorBase`
2. Name with `BPIA_` prefix (optional)
3. Override `Interact()`

<pre><code>Event Interact
├── Custom logic
└── Widget / Toggle / Animation call </pre></code>

Optional overrides:

- `ShowInteractWidget`
- `HideInteractWidget`

Relay actors should call `Interact()` manually if `bRequiresManualTrigger` is true.

## Previews

### Widget Type Examples

- Tooltip: Minimal popup
- Icon: Icon with hover
- Radial: Fill-style loading

### Relay Example

- Button actor triggers a door remotely using logic index or array call.

## Support

- [Discord](https://discord.gg/YvME6jG8)
- Email: [Jobrogi@gmail.com](mailto:Jobrogi@gmail.com)

For the most up-to-date usage instructions, visit your plugin's **Documentation** tab inside the [Fab Marketplace](https://www.unrealengine.com/marketplace).
