# Modèles 3D (glTF binaire — .glb)

Modèles d'exemple téléchargés depuis [KhronosGroup/glTF-Sample-Assets](https://github.com/KhronosGroup/glTF-Sample-Assets) :

- `SheenChair.glb` (~4 Mo) — fauteuil d'exemple
- `GlamVelvetSofa.glb` (~3 Mo) — canapé d'exemple

## Remplacer par vos propres rendus 3D

1. Exportez votre modèle au format **.glb** (glTF binaire) depuis Blender, 3ds Max, SketchUp (via export glTF) ou votre logiciel de rendu 3D.
2. Visez un fichier **< 5 Mo** si possible (compressez les textures — pensez à [glTF-Transform](https://gltf-transform.dev/) : `gltf-transform optimize`).
3. Déposez le fichier dans ce dossier `public/models/`.
4. Dans `src/data/projects.ts`, créez (ou modifiez) une entrée de catégorie `'design3d'` avec le champ :
   ```ts
   model3d: '/models/votre-modele.glb'
   ```

La visionneuse (<model-viewer> de Google) charge le fichier uniquement lorsque la
page projet est ouverte et visible — le modèle ne pèse pas sur la page d'accueil.