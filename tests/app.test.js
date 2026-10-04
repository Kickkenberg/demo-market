import test from "node:test";
import assert from "node:assert/strict";
import {
  filterTutors,
  filterForKids,
  formatPrice,
  tutors
} from "../public/src/app.js";

test("filterTutors возвращает всех репетиторов, если язык не указан", () => {
  assert.equal(filterTutors(tutors, "").length, tutors.length);
});

test("filterTutors фильтрует репетиторов по языку без учёта регистра", () => {
  const result = filterTutors(tutors, "python");

  assert.equal(result.length, 1);
  assert.equal(result[0].name, "Анна");
});

test("filterForKids возвращает только репетиторов для детей", () => {
  const result = filterForKids(tutors);

  assert.ok(result.length > 0);
  assert.ok(result.every((tutor) => tutor.forKids));
});

test("formatPrice возвращает понятную цену", () => {
  assert.equal(formatPrice(900), "900 ₽/час");
});