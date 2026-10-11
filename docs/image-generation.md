# Portfolio portrait

Created with the built-in image generation tool from the supplied portrait photograph.
Current asset: `public/images/portrait-proportions-v14.png`.
Other saved assets: `public/images/portrait-line-sketch.png`, `public/images/portrait-handdrawn-v2.png`, `public/images/portrait-epiphyllum-v3.png`, `public/images/portrait-doodle-v4.png`, `public/images/portrait-natural-contours-v6.png`, `public/images/portrait-soft-profile-v7.png`.

## Display stroke weight

The page renders the unchanged v14 raster through an SVG alpha mask. A 1.35-source-pixel erosion reduces line weight to better match the other site illustrations; a 12 percent original-alpha underlay retains the finest details. The fill still uses the text ink color. This is a rendering adjustment, with no new image generation or contour changes.

## Smaller hat and lowered features

The hat is scaled to 92 percent around its contact near (670,280). The existing nose and mouth contours move down by approximately six source pixels with smooth transitions to the bridge and chin. Hair joins are adjusted locally to meet the resized brim. The existing contour shapes and ink are retained. Earlier versions remain alongside this asset.

A built-in image generation edit was attempted with the prompt below. Since its result altered the face more than requested, the final asset applies local geometric adjustments to the approved v13 artwork instead.

### Final prompt

Precise local edit of this portfolio doodle crop. Make ONLY two subtle adjustments: (1) make the conical hat about 8 percent smaller, maintaining the same tilt and clean single-stroke outline and ribs. Anchor the smaller hat at its existing contact with the head near the face, so it remains naturally worn. (2) Move the existing nose and mouth features down slightly together, about 12 pixels in this 1380x1020 crop, preserving their EXACT shapes and horizontal positions. Smoothly reconnect the bridge and lower lip to the existing chin. Do not make the nose bigger, sharper or more projecting; don't change its silhouette except the slight downward placement. Keep the chin, jaw, neck, hair and shoulder exactly positioned as in the input. Keep same blue #285694, same stroke weight, ivory #f5f0e6 background, same crop size/framing. No eyes, no nostril, no new details. Subtle changes only.

## Hat cleanup

Built-in image generation removed doubled hat corners and stray marks near the apex. The cleaned hat region was applied to v12 while retaining the face and lower illustration. Ink remains the same CSS text color. Source: exec-bbf4b49b-6d43-4334-9a99-5afb168080cb.png.

### Final prompt

Precise local line-art cleanup. Edit ONLY the conical hat in this image. Its outer rim is doubled at both corners and several strokes near the top are stray duplicate sketch marks. Remove those duplicates so the hat has ONE clean continuous outer contour and one line for each existing structural rib. Keep the same outline silhouette, same hat size, same apex position and same brim position exactly. Keep a slight natural hand-drawn wobble; not ruler straight. Match the existing blue stroke width. Do not add more ribs or details. Preserve the face, nose, mouth, chin, neck and hair below the hat exactly unchanged. The user already approved that face. Blue #285694 on ivory #f5f0e6. Exact same crop framing and proportions. Only cleanup of overlapping hat lines.

## Face stroke and mouth adjustment

Built-in image generation edited an enlarged face crop to strengthen the stroke and move the mouth slightly lower. Only the face region was applied to v11; the remaining artwork and #285694 text-color mask are preserved. Source: exec-3440f0e9-5ad2-40f5-bdf8-4c6d8472f176.png.

### Final prompt

Precisely edit this enlarged crop of an existing blue profile doodle. Two small changes only: make the face contour about 20 percent thicker to better match the nearby neck stroke, and lower the tiny lip/mouth indentation a little (about 35 pixels in this 750x840 crop). Preserve the existing selected nose shape exactly; do not lengthen or project the nose. Keep chin, jaw, hat and neck positions fixed. The mouth stays a tiny understated indentation in a single continuous face outline. Keep original composition and scale. Muted blue #285694 on plain ivory #f5f0e6. No nostril, no extra facial details, no new strokes.

## Restore the user-selected face

The user explicitly selected the face in exec-4cea8659-3f67-4917-a2a7-6382ed905101.png. The final asset copies its original face alpha into v10, translated six pixels left to align it beneath the current hat. The nose, lips and chin are copied without rescaling or redrawing. Only the boundary near the existing jaw and hat is blended. All pixels outside x600–714, y277–402 are unchanged; ink remains #285694 and is displayed using the text-color CSS mask.

A built-in image generation compositing pass was also attempted; the final asset uses the supplied reference pixels directly to retain the selected contour exactly. Earlier assets remain available.

## Natural nose revision

Created with the built-in image generation tool from an enlarged crop of v9. A natural side profile replaces the overly concave bridge. Only the nose area was composited into the existing drawing; the remaining contours and text-matched blue are preserved. Generated crop: `exec-58077f0f-d060-403c-87c4-1ccfa725fad6.png`. Previous version retained as `portrait-ink-profile-v9.png`.

### Final prompt

Use case: precise-object-edit. This is an enlarged crop of a blue line doodle of a woman facing right beneath a conical hat. Fix ONLY the nose contour. Draw a normal, anatomically natural side-profile nose: a gently straight sloping bridge extending DOWN AND RIGHT from the hat to a softly rounded tip, then turning back left toward the existing upper lip. Regular proportions; the tip should project naturally beyond the lips. The existing nose is incorrectly scooped inward like a C; replace that concave shape with a simple natural nose. Keep the single blue outline and matching stroke width. Keep hat, lips, chin, jaw, neck and all other lines in EXACTLY their existing positions. Do not add eyes, nostril, inner nose marks or any new detail. This is the same crop and framing, not a new drawing. Blue #285694 on solid ivory #f5f0e6. No text.

## Text-matched ink and lower nose bridge

The blue is now exactly #285694. The page also renders the image as an alpha mask using the same CSS --ink variable as the heading text. This avoids color drift in future generated assets.

A localized nose correction from image generation was fitted into the selected drawing at x=649–703, y=289–345. Alpha outside this area is preserved from v8; RGB is normalized to the text color throughout. The mouth, chin, repaired neck, body, hat and bouquet retain their existing contours. Previous asset: public/images/portrait-selected-neck-v8.png.

### Final prompt

A strictly localized edit: change ONLY the NOSE outline in image 1. Image 2 is the user's real facial reference. The user wants a LOWER, FLATTER nose bridge and a small softly rounded nose tip like image 2. The current illustration's nose protrudes too far and looks tall and hooked. Flatten the bridge so it slopes gently down close to the face, with one small low rounded tip just above the lips, only slightly projecting past the mouth. No strong bridge, no long nose, no hook, no nostril, no nose anatomy details, no doubled line. Keep the original tiny simple doodle face. Keep mouth, chin, jaw, corrected neck, hat brim, hair, figure, waist and flowers exactly as in image 1. Use a single thin stroke. Nose correction region is immediately beneath the hat at approximately x=645–695, y=285–350 of the 1232x1277 image. Do not change anything outside the nose. Same scale and composition, transparent background preserved, no filled areas, no text.

Generated source: exec-5f42de4a-015a-425b-b724-0e37148d6780.png. Only the localized nose patch was applied to preserve the selected drawing.

## User-selected version with local neck correction

The user explicitly selected `exec-9d0566f3-fa9c-42e7-b3eb-733daa1635b2.png`. The built-in image generation tool produced a neck repair. Only the small neck patch from that output was composited onto the selected source, keeping all pixels outside that area unchanged. The final image is 1232 × 1277 with transparency preserved. Earlier prompts below remain as history.

### Final prompt

Precise local edit of the ATTACHED IMAGE. The user chose THIS EXACT VERSION and wants only the awkward neck fixed. Keep everything else exactly the same, especially the face and nose, head angle, body/waist width, hair, hat, flowers, blue color, stroke weight, texture, image size and framing. Do NOT clean up, recolor, redraw or improve anything else. Edit only the tiny neck-to-áo-dài join immediately below the jaw and above the shoulder, roughly x=540–635, y=385–475 in the 1232x1277 image. Remove the little round U-shaped loop / bulging collar in that area. Replace it with one short natural neck line, gently diagonal and flowing smoothly into the existing shoulder, plus a simple mostly straight collar edge if needed. No circular loop or rounded collar bubble. It should read as a relaxed human neck entering an áo dài, with no extra marks. Preserve the entire face outline ABOVE that area unaltered. Preserve the existing transparent background and transparent interiors, and the exact existing blue. No new fill, no white background, no text. ONLY a tiny neck/collar repair.

### Patch placement

Generated patch source: `exec-b159f0ba-0b4f-4702-8fb3-98e53272daef.png`. Sample offset: x + 2, y + 4. Destination polygon: (596,374), (649,374), (657,397), (636,428), (643,460), (621,472), (602,465), (580,447), (546,420), (546,401), (563,393). Outside this polygon, source pixels are unchanged.

## Softer profile and straighter waist

Created with the built-in image generation tool, using v6 for composition and An’s supplied photo for the lower-face reference. Shortens the nose and more noticeably widens the waist.

### Final prompt

Edit image 1, the existing blue doodle. Image 2 is a facial likeness reference only. The previous edit left the nose oddly protruding and the waist visibly pinched; correct both clearly. NOSE: redraw the small visible lower-face contour beneath the hat as a natural short low-bridge nose with a gently rounded tip, inspired by image 2. Reduce how far the nose projects by about HALF compared with image 1. No hooked or bulbous nose, no sharp high bridge. The hat continues to hide the eyes and upper nose. Use one thin continuous line with a very slight lip notch and softly rounded chin. No nostril, inner mouth marks, duplicate stroke or white seam. WAIST: make the torso's waist NOTICEABLY WIDER, not a token change. Remove the inward hourglass indentation on BOTH sides of the dress. Waist width should be nearly the same as the lower ribcage (at least 90 percent), with the áo dài falling in relaxed almost straight sides from under the arms toward the hips. On the left/back side, move the pinched garment contour outward toward the bent elbow, keeping it below the hair; on the right, smooth the inward waist contour beneath the forearm. Keep shoulders and head the same size, do not make hips wider or change the pose. Preserve the smooth natural neck-to-shoulder flow, simple hair, crooked hat, and epiphyllum flowers from image 1. Preserve sparse effortless doodle style and framing. Fine muted denim-blue #285694 ink, not electric blue; all interiors empty and transparent. No shading, no hatching, no new detail, no colored fills, no text, no background.

## Natural contours revision

Created with the built-in image generation tool from v5. Cleans the doubled face contour, widens the waist, and smooths the neck-to-collar join. The portrait caption and its arrow were removed from the page separately.

### Final prompt

Edit the attached portfolio doodle with THREE small corrections, retaining the same loose minimal line style and composition. 1. FACE: remove the doubled/ghost outline and use ONE thin continuous stroke for the existing nose-mouth-chin profile. No nostril or lip anatomy, just the current simple soft profile. 2. WAIST: make it a little wider, so the áo dài has a natural straighter drape rather than a pinched hourglass waist; gently straighten the inward torso curve beneath the hair. 3. NECK/COLLAR: remove the awkward rounded loop/bulge where the neck meets the áo dài. Draw a simple smooth anatomical neck contour flowing gently into the shoulder and garment, with a short clean mostly straight collar edge if needed. No circular neck loop, no bubble, no protruding rounded collar lump, no doubled neck lines. Keep the head angle, hat, hair and epiphyllum flowers at the same level of detail as the input. CRITICAL COLOR AND CLEANLINESS: all ink is muted denim blue HEX #285694, not electric blue, not pure blue. Fine single strokes, with all interiors clean and empty; absolutely NO added shading, hatching, speckles, ghost lines, noisy pixels, paint or fills. Keep original sparse doodle aesthetic. Same framing, same figure size, same flower placement. Truly transparent background and transparent interiors. No white fill. No text or backdrop.

## Flower detail balance

Created with the built-in image generation tool. The approved simplified girl is the composition reference; the change restores moderate botanical detail to the flower heads.

### Final prompt

Use case: precise-object-edit. IMAGE 1 is the current final website illustration. The user LIKES THE GIRL EXACTLY AS SHE IS. Edit ONLY THE FLOWER HEADS in her bouquet. Keep the girl, face, nose, mouth, hat, hat ribs, hair, body, hands, sleeves, clothing, stems, overall composition, scale and line quality unchanged from image 1. Image 2 is supplied ONLY as a botanical detail reference for the Epiphyllum flowers; do not borrow its girl or its dense rendering. The user wants a middle ground between image 1's overly simple daisy-like flowers and image 2's overly detailed botanical flowers. Give each of the THREE epiphyllum (queen of the night) flower heads a recognizable airy layered structure: approximately 10 to 14 irregular pointed petals, a loose inner ring of about 4 or 5 small petal suggestions, and just 3 to 5 light stamen strokes in the center. The outer petals should be long, narrow and softly bent, the inner petals slightly wider. Slightly different angles among the three flowers, not identical flat symbols. Keep all petals unfilled with lots of transparent breathing room. Gentle freehand wobble, thin blue pen strokes, effortless notebook doodle. NO dense center, NO dark or solid patches, NO heavy hatching, NO vein details on every petal, NO mechanically perfect symmetry. Use image 1's existing muted blue and line weight. Do not change ANYTHING outside the flower heads. Preserve transparent background and all transparent interiors. No white fill, text, border, or backdrop.

## Effortless doodle revision

Created with the built-in image generation tool using the previous portrait as a composition reference. Sparse outlines replace detailed hair, flowers, and facial features; the hat uses a few uneven freehand ribs.

### Final prompt

REDRAW this image as a radically simpler, effortless blue-pen DOODLE, like a charming quick 30-second sketch in the margin of a notebook. The attached image is only a reference for the POSE and COMPOSITION; do NOT trace or preserve its detailed linework. Remove at least 80 percent of its lines. Use about 45 to 60 simple strokes for the ENTIRE drawing. Deliberately casual, imperfect, sparse and airy, with slight natural wobble. NO double contours, NO shading, NO hatching, NO texture or fussy detailing. Thin blue ink #285694. Woman viewed from behind, facing right, wearing an áo dài and conical hat, holding a small bunch of epiphyllum flowers. Preserve the hat position: face hidden above the nose; ONLY a tiny lower nose-mouth-chin contour visible. FACE: ONE simple soft outline, NO nostril, NO lip anatomy, NO inner facial details, no eyes or eyebrow. A tiny nearly straight dash for the mouth at most. HAIR: one simple outer silhouette and just THREE or FOUR long, mostly straight loose strokes, no curls, no strands. HAT: a slightly wonky triangle with a casually bent brim and ONLY FOUR or FIVE uneven, gently crooked ribs drawn freehand, absolutely not ruler-straight or perfectly converging. FLOWERS: TWO or THREE very simple open epiphyllum blooms, each suggested by a few loose pointed petal loops (roughly 6 to 8 loops), a tiny empty center, NO stamens, NO petal veins, NO nested rows of detail; just two or three simple stems/leaves. BODY: basic relaxed outer contour, straighter silhouette, just two or three short fabric lines. Lots of blank empty space inside every shape. This should look unfinished in a lovely natural way, not polished vector illustration, not botanical engraving. Keep entire hat, bouquet and figure through mid-thigh in frame, with transparent background and transparent unfilled interiors. No words, no colored fills, no white fill, no backdrop.

## Epiphyllum and proportions revision

Created and refined with the built-in image generation tool. The hat covers the upper face, the silhouette and hair are simpler, and epiphyllum replaces the lilies. Flower form reference: [NC State Extension — Epiphyllum oxypetalum](https://plants.ces.ncsu.edu/plants/epiphyllum-oxypetalum/).

### Revision prompt

Use case: precise-object-edit / style-transfer. Revise image 1, a blue ink portfolio portrait. Image 2 is the ORIGINAL photograph and is the authority for natural pose, proportions, straighter hair, and understated clothing silhouette. Image 3 is ONLY the user's facial likeness reference. Keep the woman in an áo dài, viewed from behind with her head facing right, wearing a large Vietnamese conical nón lá hat, holding flowers on the right, framed from entire hat to mid-thigh. IMPORTANT CORRECTIONS: Lower the hat brim across her upper face so ONLY the lower portion of the nose, mouth and chin are visible below the brim, just like image 2. Hide forehead, eyebrows, eyes, upper nose bridge entirely. Do not enlarge the head. Keep the lower nose soft and low, cheeks softly full and chin rounded in keeping with image 3, but only minimally drawn. Make the whole illustration LESS CURVY: natural straight relaxed posture, gently straight-sided áo dài, no exaggerated hourglass waist, no dramatically rounded hips or bust. Hair should hang mostly straight in loose simple strokes with only slight bends at the ends, not big curls or swooping waves. Replace ALL lilies with a small airy bouquet of THREE blooming Epiphyllum oxypetalum (queen of the night) flowers: layered white-in-life pointed inner petals, many slender radiating outer petals around a delicate stamen center, distinctive broad starburst/funnel blooms on long slender flower tubes, plus a few flat gently scalloped cactus stems. All rendered only in blue ink outlines with transparent interiors; no lily trumpet shapes and no typical long lily leaves. Keep floral detail simplified and open. Style: thin, light, slightly imperfect hand-drawn pen lines, some small natural line breaks and gentle pressure variation; sparse and effortless notebook sketch. No dense doubled outlines, ornamental curls, dark hair shading, engraving, or solid color patches. One muted blue #285694. Transparent background and transparent interiors of all shapes. No white fill, no text, no paper texture, no border. Match the calm proportions and silhouette of image 2 while keeping the existing website asset's composition and generous negative space.

### Final simplification prompt

Edit this illustration with ONE targeted change: remove the dense shading and all the numerous fine strands from the hair. Redraw the hair with ONLY 8 to 12 thin blue contour strokes in total, leaving the entire interior of the hair transparent. Hair hangs mostly straight with slight natural bends at the ends. NO hatching, NO solid blue areas, NO strand texture, NO dozens of parallel strokes. It should be as sparse and open as the outlines of the dress. A relaxed hand-drawn sketch. Preserve absolutely everything else: the hat's position hiding the eyes and upper face, only nose-mouth-chin visible, soft round lower face, posture and straighter garment silhouette, exact three Epiphyllum oxypetalum flowers and scalloped stems, layout, scale and blue color. Keep the entire background and unfilled areas transparent. No text, no background, no white fill. This is a simplification pass only, no new shapes or ornamental curls.

## Hand-drawn revision

Created with the built-in image generation tool. The previous sketch supplies the composition; An’s additional portrait supplies the facial reference. The reference photograph is not included in the website’s public assets.

### Revision prompt

Use case: style-transfer / identity-preserve. Edit image 1, the existing blue line portrait for a portfolio, using image 2 ONLY as a facial likeness reference. Keep image 1's overall composition: woman seen from behind in a Vietnamese áo dài, head turned to the right under the large nón lá conical hat, long flowing hair, holding lilies on the right, crop through mid-thigh. Two requested changes: (1) make the drawing feel more human, relaxed and hand drawn: fluid gestural pen contours with subtle wobble, natural pressure variation, a few delicate overlapping exploratory strokes, slight breaks in lines, charming asymmetry. Keep it sparse, graceful and light, like a spontaneous artist's notebook sketch, not polished vector curves or technical outlines. Simplify the hair and flowers; no dense hatching or solid shading. (2) Carefully adapt the face toward the person in image 2: a distinctly lower, flatter nose bridge with a softly rounded small nose tip, fuller rounded cheeks and a softer, slightly fuller jaw and chin; a subtle gentle smile matching the reference. The face should feel warmly recognizable rather than an idealized sharp-nosed fashion illustration. Translate that likeness into the existing right-facing side profile, keeping the hat and body pose. Do not exaggerate into caricature. Keep the existing blue ink color approximately #285694. Truly transparent background and transparent unfilled interiors, no white filled body or hat. No added backdrop, paper texture, text, UI, logos, frame, or photographic elements. Entire hat and bouquet visible. Retain comparable scale and positioning to image 1.

## Original prompt

Use case: style-transfer. Create an extremely minimal elegant blue contour line drawing of the woman in the provided photo, intended for an airy ivory-and-blue editorial portfolio. Preserve her pose, traditional Vietnamese áo dài, conical hat, right-facing profile and bouquet of lilies. CRITICAL: use very FEW fine lines, about 60 to 90 strokes total. Hair must be represented by only 8 to 12 long flowing contour lines, absolutely no individual hair strands, no dense shading or hatching. Bouquet simplified to 5 or 6 open lily flowers and a few leaves, no tiny filler flowers. Conical hat only outer triangle and 10 sparse structural lines. Clothing uses just outer contours and 6 delicate fold lines. One consistent thin blue pen stroke color #285694, unfilled shapes. This is a minimalist fashion contour sketch with lots of empty space, not a detailed engraving. Frame full hat through mid-thigh, entire bouquet included. Transparent background, including interiors of every shape. No words, no texture, no solid areas.
