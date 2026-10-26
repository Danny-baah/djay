from PIL import Image, ImageDraw, ImageFilter

# Create a composite mock to verify how the SVG mask and image blend look
base = Image.new('RGB', (1024, 512), (8, 23, 38))
photo = Image.open('c:/Users/DELL/OneDrive/Desktop/djservices/public/images/why-us-engineer.jpg').convert('RGB')
photo = photo.resize((544, 345))

# Create mask for the photo
mask = Image.new('L', (1024, 345), 0)
mask_draw = ImageDraw.Draw(mask)

# Generate polygon for mask
p0 = (645, 0)
p1 = (555, 60)
p2 = (495, 170)
p3 = (495, 345)

curve_pts = []
for t in [i/100.0 for i in range(101)]:
    x = (1-t)**3 * p0[0] + 3*(1-t)**2 * t * p1[0] + 3*(1-t) * t**2 * p2[0] + t**3 * p3[0]
    y = (1-t)**3 * p0[1] + 3*(1-t)**2 * t * p1[1] + 3*(1-t) * t**2 * p2[1] + t**3 * p3[1]
    curve_pts.append((x, y))

poly = curve_pts + [(1024, 345), (1024, 0)]
mask_draw.polygon(poly, fill=255)

# Paste photo onto top portion of base using mask
top_crop = Image.new('RGB', (1024, 345), (8, 23, 38))
top_crop.paste(photo, (480, 0))
base.paste(top_crop, (0, 0), mask)

# Draw the golden arc and blue glow
draw = ImageDraw.Draw(base)
# Outer subtle blue arc
p0_b = (632, 0)
p1_b = (542, 60)
p2_b = (482, 170)
p3_b = (482, 345)
curve_b = []
for t in [i/100.0 for i in range(101)]:
    x = (1-t)**3 * p0_b[0] + 3*(1-t)**2 * t * p1_b[0] + 3*(1-t) * t**2 * p2_b[0] + t**3 * p3_b[0]
    y = (1-t)**3 * p0_b[1] + 3*(1-t)**2 * t * p1_b[1] + 3*(1-t) * t**2 * p2_b[1] + t**3 * p3_b[1]
    curve_b.append((x, y))

for i in range(len(curve_b)-1):
    draw.line([curve_b[i], curve_b[i+1]], fill=(14, 110, 175), width=2)

for i in range(len(curve_pts)-1):
    draw.line([curve_pts[i], curve_pts[i+1]], fill=(245, 158, 11), width=3)

base.save('c:/Users/DELL/OneDrive/Desktop/djservices/scratch_composite_test.jpg')
print("Successfully generated composite test!")
