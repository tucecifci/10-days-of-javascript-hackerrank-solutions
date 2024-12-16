function sides(literals, ...expressions) {
    const [area, peritemeter] = expressions;
    const discriminant = Math.sqrt((peritemeter / 2) ** 2 -4 * area);

    const side1 = (peritemeter / 2 + discriminant) /2;
    const side2 = (peritemeter / 2 - discriminant) /2;

    return [side1, side2].sort((a,b) => a-b);
}