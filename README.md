<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# lastIndexOfSameValue

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the index of the last element which equals a provided search element according to the [SameValue Algorithm][@stdlib/assert/is-same-value].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import lastIndexOfSameValue from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-last-index-of-same-value@v0.1.0-deno/mod.js';
```

#### lastIndexOfSameValue( x, searchElement, fromIndex )

Returns the index of the last element which equals a provided search element according to the [SameValue Algorithm][@stdlib/assert/is-same-value].

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var idx = lastIndexOfSameValue( x, 3, 5 );
// returns 2
```

If the function is unable to find an element which equals a provided search element, the function returns `-1`.

```javascript
var x = [ 1, 2, 3, 4, 5, 6 ];

var idx = lastIndexOfSameValue( x, 7, 5 );
// returns -1
```

To begin searching from a specific index, provide a corresponding `fromIndex` argument.

```javascript
var x = [ 1, 1, 2, 1, 2, 3, 3 ];

var idx = lastIndexOfSameValue( x, 2, 3 );
// returns 2
```

If `fromIndex` is less than zero, the starting index is resolved relative to the last array element, with the last array element corresponding to `fromIndex = -1`.

```javascript
var x = [ 1, 1, 2, 1, 2, 3, 3 ];

var idx = lastIndexOfSameValue( x, 2, -4 );
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function scans an input array from the starting index to the beginning of the array (i.e., backward).
-   When searching for a search element, the function checks for equality using the [SameValue Algorithm][@stdlib/assert/is-same-value] as specified in ECMAScript 5. As a consequence, `NaN` values are considered equal, and `-0` and `+0` are considered distinct.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import lastIndexOfSameValue from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-last-index-of-same-value@v0.1.0-deno/mod.js';

var x = [ 'foo', 'bar', 'beep', 'boop', 'foo', 'bar' ];

var idx = lastIndexOfSameValue( x, 'beep', 5 );
// returns 2

idx = lastIndexOfSameValue( x, 'bop', 5 );
// returns -1

idx = lastIndexOfSameValue( x, 'foo', 5 );
// returns 4

idx = lastIndexOfSameValue( x, 'foo', -3 );
// returns 0

idx = lastIndexOfSameValue( x, 'foo', -50 );
// returns -1
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-last-index-of-same-value.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-last-index-of-same-value

[test-image]: https://github.com/stdlib-js/array-base-last-index-of-same-value/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/array-base-last-index-of-same-value/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-last-index-of-same-value/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-last-index-of-same-value?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-last-index-of-same-value.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-last-index-of-same-value/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-last-index-of-same-value/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-last-index-of-same-value/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-last-index-of-same-value/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-last-index-of-same-value/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-last-index-of-same-value/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-last-index-of-same-value/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-last-index-of-same-value/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-last-index-of-same-value/main/LICENSE

[@stdlib/assert/is-same-value]: https://github.com/stdlib-js/assert-is-same-value/tree/deno

</section>

<!-- /.links -->
