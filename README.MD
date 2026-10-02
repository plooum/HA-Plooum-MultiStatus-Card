# 📊 Plooum Multi Status Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-41BDF5.svg)](https://github.com/hacs/default)
[![version](https://img.shields.io/badge/version-v1.0.0-blue.svg)](https://github.com/)

**Plooum Multi Status Card** est une carte personnalisée minimaliste et hautement configurable pour Home Assistant (Lovelace). Elle permet d'afficher en un coup d'œil une valeur principale (comme une température) associée à plusieurs indicateurs de statut sous forme d'icônes MDI ou de SVG dynamiques avec changement de couleur selon l'état de vos équipements.

![Exemple](https://github.com/plooum/HA-Plooum-MultiStatus-Card/blob/main/docs/preview.png)

---

## 🌟 Fonctionnalités

- 🏷️ **Titre personnalisable** et raccourci de navigation au clic (vers un autre dashboard ou une sous-page).
- 🌡️ **Affichage de valeur clé** facultatif (ex. température, humidité, puissance) avec unité personnalisable.
- 🚦 **Statuts multi-équipements** :
  - Support des icônes MDI (`mdi:power`, `mdi:lightbulb`, etc.).
  - Support des **codes SVG bruts sur-mesure** avec injection dynamique de la couleur de statut via `${color}`.
  - Couleurs personnalisables indépendamment pour les états **Allumé (On)** et **Éteint (Off)**.
- ⚙️ **Éditeur visuel complet** intégré (aucun besoin de modifier du YAML à la main).
- 🎨 Style moderne translucide et épuré adaptable à tous les thèmes.

---

## 📦 Installation

### Option 1 : Via HACS (Recommandé)

1. Ouvrez **HACS** dans votre instance Home Assistant.
2. Cliquez sur les **3 petits points** en haut à droite > **Dépôts personnalisés**.
3. Ajoutez l'URL du dépôt et sélectionnez la catégorie **Lovelace**.
4. Recherchez `Plooum Multi Status Card` et cliquez sur **Télécharger**.
5. Rechargez votre navigateur.

### Option 2 : Installation manuelle

1. Téléchargez le fichier `plooum-multi-status-card.js`.
2. Placez le fichier dans votre dossier Home Assistant : `www/plooum-multi-status-card/plooum-multi-status-card.js`.
3. Allez dans **Paramètres** > **Tableaux de bord** > **3 points (haut à droite)** > **Ressources**.
4. Ajoutez une nouvelle ressource :
   - **URL** : `/local/plooum-multi-status-card/plooum-multi-status-card.js`
   - **Type** : `Module JavaScript`

---

## 🛠️ Configuration

### Via l'éditeur visuel (Interface graphique)

1. Éditez votre tableau de bord Lovelace.
2. Cliquez sur **Ajouter une carte** et cherchez **Plooum Multi Status Card**.
3. Configurez les options générales (Titre, Entité principale, Tap Action...).
4. Ajoutez vos équipements et définissez leurs icônes ou codes SVG ainsi que leurs couleurs.

---

### Exemples d'utilisation

#### 💡 Exemple 1 : Dashboard Général (Exemple générique)

```yaml
type: custom:plooum-multi-status-card
title: Salon
navigation_path: /dashboard-maison/salon
show_temp: true
temp_entity: sensor.temperature_salon
temp_unit: °C
status_items:
  - entity: light.lumieres_salon
    type: icon
    icon_on: mdi:lightbulb
    icon_off: mdi:lightbulb-off
    color_on: "#fdd835"
    color_off: "#757575"
  - entity: switch.prise_tv
    type: icon
    icon_on: mdi:television
    icon_off: mdi:television-off
    color_on: "#4caf50"
    color_off: "#757575"
```

#### 💡 Exemple 2 : Dashboard avec svg personnalisé (Exemple générique)

```yaml
type: custom:ha-plooum-multi-status-card
title: Bassin
navigation_path: /dashboard-maison/bassin
temp_entity: sensor.thermometre_bassin_temperature
temp_unit: °C
status_items:
  - entity: light.uvbassin
    type: svg
    color_on: '#ab47bc'
    color_off: '#757575'
    svg_content: |
      (color) => `
        <svg viewBox="0 0 24 24" style="width: 22px; height: 22px; fill: ${color};">
          <!-- Cercle extérieur style molécule/atome -->
          <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" opacity="0.3" />
          <!-- Lettres UV au centre (Typographie Material Design) -->
          <text x="12" y="15.5" font-size="10" font-weight="900" font-family="Roboto, sans-serif" text-anchor="middle" fill="${color}">UV</text>
        </svg>
      `
grid_options:
  columns: 3
  rows: auto
tap_action_type: navigate
```