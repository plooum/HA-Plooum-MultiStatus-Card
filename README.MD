# Aquarium Status Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/custom-components/hacs)
[![GitHub release](https://img.shields.io/github/v/release/TON_PSEUDO/aquarium-status-card)](https://github.com/TON_PSEUDO/aquarium-status-card/releases)

Une carte Home Assistant élégante et compacte conçue spécifiquement pour le suivi d'aquariums et de bassins. Elle affiche d'un seul coup d'œil le titre, la température actuelle ainsi que l'état de plusieurs équipements (éclairage, pompe, CO2, stérilisateur UV, etc.).

---

## 📸 Aperçu

*(Tu peux ajouter ici une capture d'écran de ta carte en action, par exemple en la glissant-déposant dans ton README sur GitHub)*

---

## ✨ Fonctionnalités

- 🌡️ **Affichage de la température** en temps réel avec unité personnalisable.
- 💡 **Suivi d'état des équipements** (lumières, prises connectées, pompes) avec icônes dynamiques (actifs / inactifs) et gestion des couleurs.
- 🎨 **Support des icônes SVG personnalisées** (idéal pour afficher des éléments spécifiques comme "UV", "CO2", etc.).
- 🧭 **Navigation au clic** : Redirection directe vers un tableau de bord dédié (ex: `/dashboard-maison/150l`) lors d'un clic sur la carte.
- ⚙️ **Éditeur visuel de configuration** intégré pour configurer rapidement les paramètres de base sans toucher au YAML.

---

## 📥 Installation

### Via HACS (Recommandé)

1. Assurez-vous que [HACS](https://hacs.xyz/) est installé sur votre instance Home Assistant.
2. Rendez-vous dans **HACS** > **Frontend**.
3. Cliquez sur les trois petits points en haut à droite, puis sur **Dépôts personnalisés** (Custom repositories).
4. Ajoutez l'URL de votre dépôt GitHub avec la catégorie **Lovelace**.
5. Recherchez **"Aquarium Status Card"** et cliquez sur **Télécharger**.

### Installation Manuelle

1. Téléchargez le fichier `aquarium-card.js` depuis la dernière [Release](https://github.com/TON_PSEUDO/aquarium-status-card/releases).
2. Placez le fichier dans votre dossier `www/` (par exemple : `config/www/aquarium-card.js`).
3. Ajoutez la ressource dans vos tableaux de bord (via l'interface graphique ou dans votre configuration YAML) :
   ```yaml
   resources:
     - url: /local/aquarium-card.js
       type: module