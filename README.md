
# Cubo 3D Interativo com Three.js


![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ThreeJs](https://img.shields.io/badge/Three.js-000000?style=for-the-badge&logo=three.js&logoColor=white)
![Deploy](https://img.shields.io/badge/Deploy-GitHub_Pages-222222?style=for-the-badge&logo=githubpages&logoColor=white)


## Descrição

Esta aplicação web utilizando Three.js para renderização de um cubo 3D interativo com iluminação, grid de referência e controle dinâmico de cores via interface do usuário.

O projeto permite manipulação da câmera com o mouse e alteração da cor do cubo em tempo real, incluindo um modo automático de variação de cores o "Party Mode".

---

## Funcionalidades

* Renderização de cena 3D com WebGL
* Cubo com material físico (`MeshStandardMaterial`)
* Iluminação direcional e ambiente
* GridHelper para referência espacial
* Controle de câmera com OrbitControls:
  * Rotação
  * Zoom
  * Pan
* Alteração de cor manual via input
* Modo "Party" com animação de cores usando HSL
* Responsividade ao redimensionamento da janela

---

## Tecnologias utilizadas

* JavaScript
* Three.js
* WebGL

---

## Como executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` no navegador
> Não é necessário build ou instalação de dependências
```bash
 git clone https://github.com/Luiz-Fernando-Policarpo-Leandro/3D-cube-with-threejs.git
```
---

## Estrutura do Projeto

```
/
├── index.html
├── javascript.js
└── style.css
```

---

## Conceitos aplicados

### Cena, câmera e renderização

- `Scene`: container de todos os objetos da cena
* `PerspectiveCamera`: simula visão humana (FOV + aspect ratio)
* `WebGLRenderer`: responsável pela renderização

### Geometria e Material

* `BoxGeometry`: definição do cubo
* `MeshStandardMaterial`: material que reage à luz

### Iluminação

* `DirectionalLight`: simula luz direcional (ex: sol)
* `AmbientLight`: iluminação global suave

### Interação

* `OrbitControls`: controle de câmera com suavização (`enableDamping`)

### Animação

* Loop com `requestAnimationFrame`
* Alteração dinâmica de cor via `setHSL`

---

## Lógica de cores

### Modo manual

A cor do cubo é definida pelo input:

```js
cube.material.color.set(inputCubeColor.value);
```

### Party Mode

Quando ativado, a cor varia continuamente no espectro HSL:

```js
const time = Date.now() * 0.0003;
cube.material.color.setHSL(time % 1, 1, 0.5);
```

---

## Responsividade

A aplicação ajusta automaticamente a câmera e o renderizador ao redimensionamento da tela:

```js
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
```
---

## Objetivo Final
Apresentar um projeto de 