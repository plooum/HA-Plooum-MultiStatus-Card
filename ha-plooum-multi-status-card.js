(function () {
  'use strict';

  /**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$3=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=true,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$3.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$3.set(s,t));}return t}toString(){return this.cssText}};const r$2=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),i$3=(t,...e)=>{const o=1===t.length?t[0]:e.reduce((e,s,o)=>e+(t=>{if(true===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[o+1],t[0]);return new n$2(o,t,s$2)},S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const{is:i$2,defineProperty:e$1,getOwnPropertyDescriptor:h$1,getOwnPropertyNames:r$1,getOwnPropertySymbols:o$2,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$2(t,s),b$1={attribute:true,type:String,converter:u$1,reflect:false,useDefault:false,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;let y$1 = class y extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=b$1){if(s.state&&(s.attribute=false),this._$Ei(),this.prototype.hasOwnProperty(t)&&((s=Object.create(s)).wrapped=true),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),h=this.getPropertyDescriptor(t,i,s);void 0!==h&&e$1(this.prototype,t,h);}}static getPropertyDescriptor(t,s,i){const{get:e,set:r}=h$1(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get:e,set(s){const h=e?.call(this);r?.call(this,s),this.requestUpdate(t,h,i);},configurable:true,enumerable:true}}static getPropertyOptions(t){return this.elementProperties.get(t)??b$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=true,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...r$1(t),...o$2(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return  false===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=false,this.hasUpdated=false,this._$Em=null,this._$Ev();}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this));}addController(t){(this._$EO??=new Set).add(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$EO?.delete(t);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(true),this._$EO?.forEach(t=>t.hostConnected?.());}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.());}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$ET(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&true===i.reflect){const h=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==h?this.removeAttribute(e):this.setAttribute(e,h),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e;const r=h.fromAttribute(s,t.type);this[e]=r??this._$Ej?.get(e)??r,this._$Em=null;}}requestUpdate(t,s,i,e=false,h){if(void 0!==t){const r=this.constructor;if(false===e&&(h=this[t]),i??=r.getPropertyOptions(t),!((i.hasChanged??f$1)(h,s)||i.useDefault&&i.reflect&&h===this._$Ej?.get(t)&&!this.hasAttribute(r._$Eu(t,i))))return;this.C(t,s,i);} false===this.isUpdatePending&&(this._$ES=this._$EP());}C(t,s,{useDefault:i,reflect:e,wrapped:h},r){i&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??s??this[t]),true!==h||void 0!==r)||(this._$AL.has(t)||(this.hasUpdated||i||(s=void 0),this._$AL.set(t,s)),true===e&&this._$Em!==t&&(this._$Eq??=new Set).add(t));}async _$EP(){this.isUpdatePending=true;try{await this._$ES;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t){const{wrapped:t}=i,e=this[s];true!==t||this._$AL.has(s)||void 0===e||this.C(s,void 0,i,e);}}let t=false;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$EO?.forEach(t=>t.hostUpdate?.()),this.update(s)):this._$EM();}catch(s){throw t=false,this._$EM(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$EO?.forEach(t=>t.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=true,this.firstUpdated(t)),this.updated(t);}_$EM(){this._$AL=new Map,this.isUpdatePending=false;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return  true}update(t){this._$Eq&&=this._$Eq.forEach(t=>this._$ET(t,this[t])),this._$EM();}updated(t){}firstUpdated(t){}};y$1.elementStyles=[],y$1.shadowRootOptions={mode:"open"},y$1[d$1("elementProperties")]=new Map,y$1[d$1("finalized")]=new Map,p$1?.({ReactiveElement:y$1}),(a$1.reactiveElementVersions??=[]).push("2.1.2");

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */
  const t=globalThis,i$1=t=>t,s$1=t.trustedTypes,e=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,h="$lit$",o$1=`lit$${Math.random().toFixed(9).slice(2)}$`,n="?"+o$1,r=`<${n}>`,l=document,c=()=>l.createComment(""),a=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,d=t=>u(t)||"function"==typeof t?.[Symbol.iterator],f="[ \t\n\f\r]",v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${f}(?:([^\\s"'>=/]+)(${f}*=${f}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,x=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),b=x(1),E=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),C=new WeakMap,P=l.createTreeWalker(l,129);function V(t,i){if(!u(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e?e.createHTML(i):i}const N=(t,i)=>{const s=t.length-1,e=[];let n,l=2===i?"<svg>":3===i?"<math>":"",c=v;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,f=0;for(;f<s.length&&(c.lastIndex=f,u=c.exec(s),null!==u);)f=c.lastIndex,c===v?"!--"===u[1]?c=_:void 0!==u[1]?c=m:void 0!==u[2]?(y.test(u[2])&&(n=RegExp("</"+u[2],"g")),c=p):void 0!==u[3]&&(c=p):c===p?">"===u[0]?(c=n??v,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?p:'"'===u[3]?$:g):c===$||c===g?c=p:c===_||c===m?c=v:(c=p,n=void 0);const x=c===p&&t[i+1].startsWith("/>")?" ":"";l+=c===v?s+r:d>=0?(e.push(a),s.slice(0,d)+h+s.slice(d)+o$1+x):s+o$1+(-2===d?i:x);}return [V(t,l+(t[s]||"<?>")+(2===i?"</svg>":3===i?"</math>":"")),e]};class S{constructor({strings:t,_$litType$:i},e){let r;this.parts=[];let l=0,a=0;const u=t.length-1,d=this.parts,[f,v]=N(t,i);if(this.el=S.createElement(f,e),P.currentNode=this.el.content,2===i||3===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=P.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(h)){const i=v[a++],s=r.getAttribute(t).split(o$1),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:l,name:e[2],strings:s,ctor:"."===e[1]?I:"?"===e[1]?L:"@"===e[1]?z:H}),r.removeAttribute(t);}else t.startsWith(o$1)&&(d.push({type:6,index:l}),r.removeAttribute(t));if(y.test(r.tagName)){const t=r.textContent.split(o$1),i=t.length-1;if(i>0){r.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)r.append(t[s],c()),P.nextNode(),d.push({type:2,index:++l});r.append(t[i],c());}}}else if(8===r.nodeType)if(r.data===n)d.push({type:2,index:l});else {let t=-1;for(;-1!==(t=r.data.indexOf(o$1,t+1));)d.push({type:7,index:l}),t+=o$1.length-1;}l++;}}static createElement(t,i){const s=l.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){if(i===E)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=a(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(false),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=M(t,h._$AS(t,i.values),h,e)),i}class R{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??l).importNode(i,true);P.currentNode=e;let h=P.nextNode(),o=0,n=0,r=s[0];for(;void 0!==r;){if(o===r.index){let i;2===r.type?i=new k(h,h.nextSibling,this,t):1===r.type?i=new r.ctor(h,r.name,r.strings,this,t):6===r.type&&(i=new Z(h,this,t)),this._$AV.push(i),r=s[++n];}o!==r?.index&&(h=P.nextNode(),o++);}return P.currentNode=l,e}p(t){let i=0;for(const s of this._$AV) void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class k{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??true;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=M(this,t,i),a(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==E&&this._(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):d(t)?this.k(t):this._(t);}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t));}_(t){this._$AH!==A&&a(this._$AH)?this._$AA.nextSibling.data=t:this.T(l.createTextNode(t)),this._$AH=t;}$(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=S.createElement(V(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new R(e,this),s=t.u(this.options);t.p(i),this.T(s),this._$AH=t;}}_$AC(t){let i=C.get(t.strings);return void 0===i&&C.set(t.strings,i=new S(t)),i}k(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new k(this.O(c()),this.O(c()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,s){for(this._$AP?.(false,true,s);t!==this._$AB;){const s=i$1(t).nextSibling;i$1(t).remove(),t=s;}}setConnected(t){ void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}_$AI(t,i=this,s,e){const h=this.strings;let o=false;if(void 0===h)t=M(this,t,i,0),o=!a(t)||t!==this._$AH&&t!==E,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=M(this,e[s+n],i,n),r===E&&(r=this._$AH[n]),o||=!a(r)||r!==this._$AH[n],r===A?t=A:t!==A&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class I extends H{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}class L extends H{constructor(){super(...arguments),this.type=4;}j(t){this.element.toggleAttribute(this.name,!!t&&t!==A);}}class z extends H{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=M(this,t,i,0)??A)===E)return;const s=this._$AH,e=t===A&&s!==A||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==A&&(s===A||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){M(this,t);}}const B=t.litHtmlPolyfillSupport;B?.(S,k),(t.litHtmlVersions??=[]).push("3.3.3");const D=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new k(i.insertBefore(c(),t),t,void 0,s??{});}return h._$AI(t),h};

  /**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   */const s=globalThis;class i extends y$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(r,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(true);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(false);}render(){return E}}i._$litElement$=true,i["finalized"]=true,s.litElementHydrateSupport?.({LitElement:i});const o=s.litElementPolyfillSupport;o?.({LitElement:i});(s.litElementVersions??=[]).push("4.2.2");

  const CARD_VERSION = 'v0.9.0';

  class HaPlooumMultiStatusCard extends i {
    static get properties() {
      return {
        hass: { type: Object },
        config: { type: Object },
      };
    }

    connectedCallback() {
      super.connectedCallback();
      console.info(
        `%c HA-PLOOUM-MULTI-STATUS-CARD %c ${CARD_VERSION} `,
        'color: white; background: #03a9f4; font-weight: 700;',
        'color: #03a9f4; background: white; font-weight: 700;'
      );
    }

    setConfig(config) {
      if (!config || !config.title) {
        throw new Error('Veuillez définir un titre (title)');
      }
      this.config = config;
    }

    getCardSize() {
      return 1;
    }

    static getStubConfig() {
      return { 
        title: 'Mon Équipement', 
        tap_action_type: 'navigate',
        navigation_path: '/dashboard-maison', 
        temp_entity: 'sensor.temperature',
        temp_unit: '°C',
        show_temp: true,
        status_items: []
      };
    }

    static getConfigElement() {
      return document.createElement('ha-plooum-multi-status-card-editor');
    }

    render() {
      if (!this.hass || !this.config) {
        return b``;
      }

      const title = this.config.title || '';
      const tempEntityId = this.config.temp_entity;
      const tempUnit = this.config.temp_unit || '°C';
      const showTemp = this.config.show_temp !== false;
      const statusItems = this.config.status_items || [];
      
      // Gestion de l'action au clic
      const actionType = this.config.tap_action_type || 'navigate';
      const cursorStyle = actionType === 'none' ? 'default' : 'pointer';

      let tempString = '-- ' + tempUnit;
      if (tempEntityId && this.hass.states && this.hass.states[tempEntityId]) {
        let t = parseFloat(this.hass.states[tempEntityId].state);
        if (!isNaN(t)) {
          tempString = t.toFixed(1) + ' ' + tempUnit;
        }
      }

      const gridStyle = showTemp 
        ? 'grid-template-areas: "title" "temp" "status"; grid-template-rows: auto auto auto;'
        : 'grid-template-areas: "title" "status"; grid-template-rows: auto auto;';

      return b`
      <div 
        class="card" 
        style="${gridStyle} cursor:${cursorStyle};" 
        @click="${this._handleAction}"
      >
        <div class="title">${title}</div>${showTemp ? b`<div class="temp">${tempString}</div>` : ''}
        <div class="status">
          ${statusItems.map(item => {
            const entState = this.hass.states ? this.hass.states[item.entity] : null;
            const isOn = entState && entState.state === 'on';
            const color = isOn ? (item.color_on || '#66bb6a') : (item.color_off || '#757575');
            
            if (item.type === 'svg') {
              let evaluatedSvg = '';
              
              if (item.svg_content) {
                let rawSvg = item.svg_content;
                rawSvg = rawSvg.replace(/^[\s\S]*?=>\s*`?/, '').replace(/`?\s*$/, '');
                evaluatedSvg = rawSvg.replace(/\$\{color\}/g, color);
              } else {
                evaluatedSvg = `
                  <svg viewBox="0 0 24 24" style="width: 22px; height: 22px; fill: ${color};">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z" opacity="0.3" />
                  </svg>
                `;
              }
              
              return b`<div style="display: flex; align-items: center;" .innerHTML="${evaluatedSvg}"></div>`;
            } else {
              const icon = isOn ? (item.icon_on || 'mdi:power') : (item.icon_off || 'mdi:power-off');
              return b`
                <ha-icon 
                  icon="${icon}" 
                  style="color: ${color}; --mdc-icon-size: ${item.size || '20px'};">
                </ha-icon>
              `;
            }
          })}
        </div>
      </div>
    `;
    }

    _handleAction() {
      if (!this.config || !this.hass) return;

      const actionType = this.config.tap_action_type || 'navigate';

      switch (actionType) {
        case 'navigate':
          if (this.config.navigation_path) {
            history.pushState(null, '', this.config.navigation_path);
            window.dispatchEvent(new CustomEvent('location-changed', {
              detail: { replace: false },
              bubbles: true,
              composed: true,
            }));
          }
          break;

        case 'toggle':
          if (this.config.tap_action_entity) {
            // Utilisation du service générique homeassistant.toggle
            this.hass.callService('homeassistant', 'toggle', {
              entity_id: this.config.tap_action_entity
            });
          }
          break;

        case 'script':
          if (this.config.tap_action_script) {
            const scriptId = this.config.tap_action_script;
            const domain = scriptId.split('.')[0];
            this.hass.callService(domain, 'turn_on', {
              entity_id: scriptId
            });
          }
          break;
      }
    }

    static get styles() {
      return i$3`
      :host {
        display: block;
      }
      .card {
        padding: 8px 12px;
        border-radius: 20px;
        background-color: rgba(0, 0, 0, 0.35);
        box-shadow: none;
        border: none;
        display: grid;
        row-gap: 4px;
        box-sizing: border-box;
      }
      .title {
        justify-self: center;
        align-self: center;
        font-size: 13px;
        font-weight: 500;
        color: #ffffff;
        letter-spacing: 0.5px;
      }
      .temp {
        justify-self: center;
        align-self: center;
        font-size: 16px;
        font-weight: normal;
        color: rgba(255, 255, 255, 0.8);
      }
      .status {
        grid-column: 1 / -1;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    `;
    }
  }

  // -------------------------------------------------------------------------
  // Éditeur visuel
  // -------------------------------------------------------------------------
  class HaPlooumMultiStatusCardEditor extends i {
    static get properties() {
      return {
        hass: { type: Object },
        config: { type: Object },
      };
    }

    setConfig(config) {
      this.config = config;
    }

    render() {
      if (!this.hass || !this.config) {
        return b``;
      }

      const actionType = this.config.tap_action_type || 'navigate';

      // Construction dynamique du schéma de l'éditeur
      const schema = [
        { name: 'title', label: 'Titre de la carte', selector: { text: {} } },
        { 
          name: 'tap_action_type', 
          label: 'Action au clic sur la carte', 
          selector: { 
            select: { 
              options: [
                { value: 'navigate', label: 'Navigation vers une autre page' },
                { value: 'toggle', label: 'Basculer une entité (Toggle)' },
                { value: 'script', label: 'Exécuter un script' },
                { value: 'none', label: 'Aucune action' }
              ] 
            } 
          } 
        }
      ];

      // Champs conditionnels selon l'action choisie
      if (actionType === 'navigate') {
        schema.push({ name: 'navigation_path', label: 'Chemin de navigation (ex: /dashboard/vue1)', selector: { text: {} } });
      } else if (actionType === 'toggle') {
        schema.push({ name: 'tap_action_entity', label: 'Entité à basculer (switch, light...)', selector: { entity: {} } });
      } else if (actionType === 'script') {
        schema.push({ name: 'tap_action_script', label: 'Script à exécuter', selector: { entity: { domain: 'script' } } });
      }

      schema.push({ name: 'show_temp', label: 'Afficher la ligne de valeur principale', selector: { boolean: {} } });

      if (this.config.show_temp !== false) {
        schema.push(
          { 
            name: 'temp_entity', 
            label: 'Entité principale (ex: température)', 
            selector: { entity: { domain: 'sensor' } } 
          },
          { name: 'temp_unit', label: 'Unité (ex: °C)', selector: { text: {} } }
        );
      }

      const statusItems = this.config.status_items || [];

      return b`
      <div class="editor">
        <ha-form
          .hass="${this.hass}"
          .data="${this.config}"
          .schema="${schema}"
          @value-changed="${this._formChanged}"
        ></ha-form>

        <hr class="divider" />

        <div class="section-header">
          <h3>Éléments de statut (Équipements)</h3>
          <button class="btn-add" @click="${this._addItem}">+ Ajouter un équipement</button>
        </div>

        <div class="items-container">
          ${statusItems.map((item, index) => {
            const isSvg = item.type === 'svg';
            
            const itemSchema = [
              { name: 'entity', label: 'Entité (ex: switch, light...)', selector: { entity: {} } },
              { 
                name: 'type', 
                label: "Type d'affichage", 
                selector: { 
                  select: { 
                    options: [
                      { value: 'icon', label: 'Icône classique (MDI)' },
                      { value: 'svg', label: 'SVG personnalisé' }
                    ] 
                  } 
                } 
              },
            ];

            if (isSvg) {
              itemSchema.push(
                { 
                  name: 'svg_content', 
                  label: 'Code SVG brut (ex: <svg ...>${color}</svg>)', 
                  selector: { text: { multiline: true } } 
                }
              );
            } else {
              itemSchema.push(
                { name: 'icon_on', label: 'Icône (Allumé)', selector: { icon: {} } },
                { name: 'icon_off', label: 'Icône (Éteint)', selector: { icon: {} } }
              );
            }

            return b`
              <div class="item-card">
                <div class="item-header">
                  <span>Équipement #${index + 1} (${item.type || 'icon'})</span>
                  <button class="btn-delete" @click="${() => this._deleteItem(index)}">Supprimer</button>
                </div>

                <ha-form
                  .hass="${this.hass}"
                  .data="${item}"
                  .schema="${itemSchema}"
                  @value-changed="${e => this._itemFormChanged(index, e)}"
                ></ha-form>

                <div class="color-pickers-row">
                  <div class="color-field">
                    <label>Couleur (Allumé)</label>
                    <div class="color-picker-wrapper">
                      <input 
                        type="color" 
                        .value="${item.color_on || '#66bb6a'}" 
                        @input="${e => this._updateColor(index, 'color_on', e.target.value)}"
                      />
                      <span>${item.color_on || '#66bb6a'}</span>
                    </div>
                  </div>

                  <div class="color-field">
                    <label>Couleur (Éteint)</label>
                    <div class="color-picker-wrapper">
                      <input 
                        type="color" 
                        .value="${item.color_off || '#757575'}" 
                        @input="${e => this._updateColor(index, 'color_off', e.target.value)}"
                      />
                      <span>${item.color_off || '#757575'}</span>
                    </div>
                  </div>
                </div>

              </div>
            `;
          })}
        </div>
      </div>
    `;
    }

    _formChanged(ev) {
      if (!this.config || !this.hass) return;
      const newConfig = {
        ...this.config,
        ...ev.detail.value,
      };
      this.config = newConfig;
      this._fireConfigChanged(newConfig);
    }

    _itemFormChanged(index, ev) {
      if (!this.config || !this.hass) return;
      const statusItems = [...(this.config.status_items || [])];
      statusItems[index] = {
        ...statusItems[index],
        ...ev.detail.value,
      };
      const newConfig = {
        ...this.config,
        status_items: statusItems,
      };
      this.config = newConfig;
      this._fireConfigChanged(newConfig);
    }

    _updateColor(index, colorKey, value) {
      if (!this.config || !this.hass) return;
      const statusItems = [...(this.config.status_items || [])];
      statusItems[index] = {
        ...statusItems[index],
        [colorKey]: value,
      };
      const newConfig = {
        ...this.config,
        status_items: statusItems,
      };
      this.config = newConfig;
      this._fireConfigChanged(newConfig);
    }

    _addItem() {
      if (!this.config || !this.hass) return;
      const statusItems = [...(this.config.status_items || [])];
      statusItems.push({
        entity: '',
        type: 'icon',
        icon_on: 'mdi:power',
        icon_off: 'mdi:power-off',
        svg_content: '',
        color_on: '#66bb6a',
        color_off: '#757575'
      });
      const newConfig = {
        ...this.config,
        status_items: statusItems,
      };
      this.config = newConfig;
      this._fireConfigChanged(newConfig);
    }

    _deleteItem(index) {
      if (!this.config || !this.hass) return;
      const statusItems = [...(this.config.status_items || [])];
      statusItems.splice(index, 1);
      const newConfig = {
        ...this.config,
        status_items: statusItems,
      };
      this.config = newConfig;
      this._fireConfigChanged(newConfig);
    }

    _fireConfigChanged(newConfig) {
      const customEvent = new CustomEvent('config-changed', {
        detail: { config: newConfig },
        bubbles: true,
        composed: true,
      });
      this.dispatchEvent(customEvent);
    }

    static get styles() {
      return i$3`
      .editor {
        display: flex;
        flex-direction: column;
        gap: 14px;
        padding: 4px 0;
      }
      .divider {
        border: none;
        border-top: 1px solid var(--divider-color);
        margin: 8px 0;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .section-header h3 {
        margin: 0;
        font-size: 14px;
        color: var(--primary-text-color);
      }
      .btn-add {
        background: var(--primary-color);
        color: var(--text-primary-color, #fff);
        border: none;
        padding: 6px 12px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 500;
      }
      .items-container {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .item-card {
        background: rgba(var(--rgb-primary-text-color, 255, 255, 255), 0.03);
        border: 1px solid var(--divider-color);
        border-radius: 8px;
        padding: 12px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .item-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-weight: bold;
        font-size: 12px;
        color: var(--primary-text-color);
      }
      .btn-delete {
        background: transparent;
        color: var(--error-color, #db4437);
        border: none;
        cursor: pointer;     
        font-size: 12px;
      }
      .color-pickers-row {
        display: flex;
        gap: 16px;
        margin-top: 4px;
      }
      .color-field {
        display: flex;
        flex-direction: column;
        gap: 4px;
        flex: 1;
      }
      .color-field label {
        font-size: 11px;
        color: var(--secondary-text-color);
      }
      .color-picker-wrapper {
        display: flex;
        align-items: center;
        gap: 8px;
        background: var(--secondary-background-color);
        padding: 4px 8px;
        border-radius: 4px;
        border: 1px solid var(--divider-color);
      }
      .color-picker-wrapper input[type="color"] {
        border: none;
        width: 28px;
        height: 28px;
        border-radius: 4px;
        cursor: pointer;
        background: transparent;
        padding: 0;
      }
      .color-picker-wrapper span {
        font-size: 12px;
        font-family: monospace;
        color: var(--primary-text-color);
      }
    `;
    }
  }

  if (!customElements.get('ha-plooum-multi-status-card')) {
    customElements.define('ha-plooum-multi-status-card', HaPlooumMultiStatusCard);
  }
  if (!customElements.get('ha-plooum-multi-status-card-editor')) {
    customElements.define('ha-plooum-multi-status-card-editor', HaPlooumMultiStatusCardEditor);
  }

  window.customCards = window.customCards || [];
  if (!window.customCards.some(card => card.type === 'ha-plooum-multi-status-card')) {
    window.customCards.push({
      type: 'ha-plooum-multi-status-card',
      name: 'Ha Plooum Multi Status Card',
      description: 'Une carte personnalisée pour afficher plusieurs statuts et icônes.',
      preview: false,
    });
  }

})();
//# sourceMappingURL=ha-plooum-multi-status-card.js.map
