"""BDREAM HOME share card — real apartment photography on cream paper."""

from PIL import Image, ImageDraw, ImageEnhance, ImageFont, ImageFilter

W, H = 1200, 630
CREAM = (244, 239, 230)  # #F4EFE6
FOREST = (20, 53, 40)  # #143528
GOLD = (166, 132, 61)  # #A6843D

PANEL = 508  # cream column; photo bleeds the rest
PHOTO = "/workspace/attachments/500A5AF8-5F7D-4B0C-A503-E5E4678931ED.jpg"
ROMAN = "/workspace/.grok/fonts/corm-var.ttf"
ITALIC = "/workspace/.grok/fonts/corm-italic-var.ttf"


def font(path, size, weight):
    f = ImageFont.truetype(path, size)
    f.set_variation_by_axes([weight])
    return f


def text_width(text, f, tracking):
    if not text:
        return 0
    return f.getlength(text) + tracking * (len(text) - 1)


def draw_tracked(draw, xy, text, f, fill, tracking):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill, anchor="ls")
        x += f.getlength(ch) + tracking
    return x


def cover(path, w, h, focus_y):
    im = Image.open(path).convert("RGB")
    sw, sh = im.size
    scale = max(w / sw, h / sh)
    nw, nh = round(sw * scale), round(sh * scale)
    im = im.resize((nw, nh), Image.Resampling.LANCZOS)
    left = (nw - w) // 2
    top = int((nh - h) * focus_y)
    top = max(0, min(top, nh - h))
    im = im.crop((left, top, left + w, top + h))
    im = ImageEnhance.Color(im).enhance(0.96)
    im = ImageEnhance.Contrast(im).enhance(1.05)
    im = ImageEnhance.Brightness(im).enhance(1.02)
    return im


def main():
    canvas = Image.new("RGB", (W, H), CREAM)
    photo = cover(PHOTO, W - PANEL, H, focus_y=0.46)
    canvas.paste(photo, (PANEL, 0))

    draw = ImageDraw.Draw(canvas)
    # Restrained gold seam where paper meets the room.
    draw.rectangle((PANEL - 2, 0, PANEL, H), fill=GOLD)

    # Lockup, left-aligned inside the paper column, optically centered.
    title_size = 92
    title_tracking = 3.2
    title_font = font(ROMAN, title_size, 640)
    home_font = title_font
    brow_font = font(ROMAN, 18, 600)
    brow_tracking = 5.4
    tag_font = font(ITALIC, 26, 500)
    place = "IGANDO, LAGOS"
    line1 = "BDREAM"
    line2 = "HOME"
    tag = "More than a stay, a home."

    w1 = text_width(line1, title_font, title_tracking)
    w2 = text_width(line2, home_font, title_tracking)
    # Keep the wider line inside the paper with comfortable margins.
    max_title = PANEL - 96
    assert w1 <= max_title, (w1, max_title)

    brow_w = text_width(place, brow_font, brow_tracking)
    tag_w = tag_font.getlength(tag)
    block_w = max(w1, w2, brow_w, tag_w)

    # Baselines. Tight title stack; generous air around the group.
    title_lead = 78
    # Measure a cap height so the block sits truly centered.
    cap = title_font.getbbox("BDREAM")
    # bbox relative to baseline anchor is not used; we place by baseline.
    # Group from eyebrow top to tagline baseline.
    brow_size = 18
    group_h = 28 + 36 + title_lead + 28 + 18 + 22 + 26
    top = (H - group_h) // 2 + 4
    x = 64

    brow_baseline = top + brow_size
    draw_tracked(draw, (x, brow_baseline), place, brow_font, GOLD, brow_tracking)

    rule_y = brow_baseline + 18
    draw.rectangle((x, rule_y, x + 46, rule_y + 1), fill=GOLD)

    base1 = rule_y + 18 + title_size
    # Nudge: Cormorant cap-height is well under the em size.
    base1 = brow_baseline + 86
    draw_tracked(draw, (x, base1), line1, title_font, FOREST, title_tracking)
    base2 = base1 + title_lead
    draw_tracked(draw, (x, base2), line2, home_font, FOREST, title_tracking)

    rule2_y = base2 + 22
    draw.rectangle((x, rule2_y, x + 46, rule2_y + 1), fill=GOLD)

    tag_baseline = rule2_y + 40
    draw.text((x, tag_baseline), tag, font=tag_font, fill=FOREST, anchor="ls")

    # Safety: nothing may touch the frame.
    ink_right = x + block_w
    assert ink_right < PANEL - 28, (ink_right, PANEL)
    assert x >= 36
    assert brow_baseline - brow_size > 28
    assert tag_baseline < H - 36, tag_baseline

    raw = "/workspace/.grok/og-raw.png"
    canvas.save(raw, "PNG")
    print("raw", canvas.size, "title_w", w1, "tag_w", round(tag_w), "tag_base", tag_baseline)


if __name__ == "__main__":
    main()
