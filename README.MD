# 📊 Plooum Multi Status Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/default)
[![version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/)

**Plooum Multi Status Card** is a minimalist, highly configurable custom card for Home Assistant (Lovelace). It allows you to display a main value (such as temperature) at a glance, alongside multiple status indicators using MDI icons or dynamic SVGs that change color based on your devices' states.

![Preview](https://github.com/plooum/HA-Plooum-MultiStatus-Card/blob/main/docs/preview.png)

---

## 🌟 Features

- 🏷️ **Customizable title** with a click-to-navigate shortcut (to another dashboard or sub-view).
- 🌡️ **Main value display** (optional) for key metrics (e.g., temperature, humidity, power) with customizable units.
- 🚦 **Multi-device statuses**:
  - Support for MDI icons (`mdi:power`, `mdi:lightbulb`, etc.).
  - Support for **raw custom SVG codes** with dynamic status color injection via `${color}`.
  - Independently customizable colors for **On** and **Off** states.
- ⚙️ **Full visual editor** built-in (no need to manually edit YAML unless you want to).
- 🎨 Clean, translucent modern styling that seamlessly adapts to all themes.

---

## 📦 Installation

### Option 1: Via HACS (Recommended)

1. Open **HACS** in your Home Assistant instance.
2. Click on the **3 dots** in the top right corner > **Custom repositories**.
3. Add the repository URL and select the **Lovelace** category.
4. Search for `Plooum Multi Status Card` and click **Download**.
5. Reload your browser.

### Option 2: Manual Installation

1. Download the `plooum-multi-status-card.js` file.
2. Place the file inside your Home Assistant `www` folder: `www/plooum-multi-status-card/plooum-multi-status-card.js`.
3. Go to **Settings** > **Dashboards** > **3 dots (top right)** > **Resources**.
4. Add a new resource:
   - **URL**: `/local/plooum-multi-status-card/plooum-multi-status-card.js`
   - **Type**: `JavaScript Module`

---

## 🛠️ Configuration

You can configure this card either through the Visual Editor or manually via YAML. 

### Configuration Variables

#### Main Card Options
| Name | Type | Requirement | Description |
|---|---|---|---|
| `type` | string | **Required** | Must be `custom:plooum-multi-status-card`. |
| `title` | string | Optional | The title displayed at the top of the card. |
| `tap_action_type` | string | Optional | Action to perform on card click (e.g., `navigate`). |
| `navigation_path` | string | Optional | URL or dashboard path to redirect to if `tap_action_type` is `navigate`. |
| `show_temp` | boolean | Optional | Set to `true` to display the main entity value. |
| `temp_entity` | string | Optional | The entity ID to display as the main value (e.g., `sensor.temperature`). |
| `temp_unit` | string | Optional | The unit of measurement to display next to the value (e.g., `°C`). |
| `status_items` | list | Optional | List of devices/entities to track. See **Status Items** below. |
| `grid_options` | object | Optional | Layout options for the status items. See **Grid Options** below. |

#### Status Items (`status_items`)
| Name | Type | Requirement | Description |
|---|---|---|---|
| `entity` | string | **Required** | The entity ID to monitor (e.g., `light.living_room`). |
| `type` | string | **Required** | Type of indicator to use. Accepts `icon` or `svg`. |
| `color_on` | string | Optional | Hex/RGB color code when the entity is in the 'On' state. |
| `color_off` | string | Optional | Hex/RGB color code when the entity is in the 'Off' state. |
| `icon_on` | string | Optional* | The MDI icon for the 'On' state. *(Required if `type: icon`)* |
| `icon_off` | string | Optional* | The MDI icon for the 'Off' state. *(Required if `type: icon`)* |
| `svg_content` | string | Optional* | JS template string returning an SVG. Use `${color}` to inject the state color dynamically. *(Required if `type: svg`)* |

#### Grid Options (`grid_options`)
| Name | Type | Requirement | Description |
|---|---|---|---|
| `columns` | integer | Optional | The number of columns in the status indicators grid (e.g., `3`). |
| `rows` | string/int | Optional | Row sizing definition (e.g., `auto`). |

---

## 📝 Examples

### 💡 Example 1: General Dashboard (Generic Example using Icons)

```yaml
type: custom:plooum-multi-status-card
title: Living Room
navigation_path: /dashboard-home/living-room
show_temp: true
temp_entity: sensor.living_room_temperature
temp_unit: °C
status_items:
  - entity: light.living_room_lights
    type: icon
    icon_on: mdi:lightbulb
    icon_off: mdi:lightbulb-off
    color_on: "#fdd835"
    color_off: "#757575"
  - entity: switch.tv_plug
    type: icon
    icon_on: mdi:television
    icon_off: mdi:television-off
    color_on: "#4caf50"
    color_off: "#757575"
```

### 💡 Example 1: Dashboard with Custom SVG and Grid Layout

```yaml
type: custom:plooum-multi-status-card
title: Pond
tap_action_type: navigate
navigation_path: /dashboard-home/pond
temp_entity: sensor.pond_thermometer_temperature
temp_unit: °C
status_items:
  - entity: light.uv_pond
    type: svg
    color_on: '#ab47bc'
    color_off: '#757575'
    svg_content: |
      (color) => `
        <svg viewBox="0 0 24 24" style="width: 22px; height: 22px; fill: ${color};">
          <!-- Outer circle (molecule/atom style) -->
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" opacity="0.3" />
          <!-- UV letters in the center (Material Design Typography) -->
          <text x="12" y="15.5" font-size="10" font-weight="900" font-family="Roboto, sans-serif" text-anchor="middle" fill="${color}">UV</text>
        </svg>
      `
grid_options:
  columns: 3
  rows: auto
```