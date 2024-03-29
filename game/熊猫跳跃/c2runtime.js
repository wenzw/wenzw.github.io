﻿//更多 http://bootstrapmb.com/chajian/game
'use strict';

function A() {
	return function() {}
}

function aa(d) {
	return function() {
		return this[d]
	}
}

function B(d) {
	return function() {
		return d
	}
}
var ca, da, ea, fa, ga, ha, ia, ja, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, E, Aa, Ba, Ca, Da, Ea, Fa, Ha, Ia, Ja, Ka, Oa, Pa, Qa, Ra, Sa, Ta, Ya, Za, $a, ab, bb, fb, gb, hb, ib, jb, kb, lb, mb, nb, ob, pb, sb, tb, ub, vb, wb, xb, yb, zb, Ab, Bb, Cb, Db, Hb, Ib, Jb, Kb, Lb, Mb, Nb, Ob, Pb, Qb, Rb, Sb, Tb, Ub, Vb, Wb, Xb, Yb, Zb, $b, ac = {},
	bc = {};
"function" !== typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" === typeof "test".__proto__ ? function(d) {
	return d.__proto__
} : function(d) {
	return d.constructor.prototype
});
(function() {
	function d(H, f, m, e) {
		this.set(H, f, m, e)
	}

	function g() {
		this.Ta = this.Sa = this.Va = this.Ua = this.hb = this.gb = this.Ba = this.Aa = 0
	}

	function b(H, f, m, e) {
		H < f ? m < e ? (q = H < m ? H : m, p = f > e ? f : e) : (q = H < e ? H : e, p = f > m ? f : m) : m < e ? (q = f < m ? f : m, p = H > e ? H : e) : (q = f < e ? f : e, p = H > m ? H : m)
	}

	function c() {
		this.Id = this.od = null;
		this.Kf = 0;
		m && (this.od = new Set);
		this.gg = [];
		this.Wd = !0
	}

	function a(H) {
		w[l++] = H
	}

	function e() {
		this.aa = this.Kj = this.y = this.wk = 0
	}

	function h(H) {
		this.ab = [];
		this.Yh = this.$h = this.ai = this.Zh = 0;
		this.wh(H)
	}

	function s(H, f) {
		this.Qq = H;
		this.Pq = f;
		this.cells = {}
	}

	function r(H, f, m) {
		var e;
		return t.length ? (e = t.pop(), e.xs = H, e.x = f, e.y = m, e) : new ca(H, f, m)
	}

	function n(H, f, m) {
		this.xs = H;
		this.x = f;
		this.y = m;
		this.fh = new da
	}
	ea = function(f) {
		window.console && window.console.log && window.console.log(f)
	};
	fa = function(f) {
		return "undefined" === typeof f
	};
	ga = function(f) {
		return "number" === typeof f
	};
	ha = function(f) {
		return "string" === typeof f
	};
	ia = function(f) {
		return 0 < f && 0 === (f - 1 & f)
	};
	ja = function(f) {
		--f;
		for (var m = 1; 32 > m; m <<= 1) f |= f >> m;
		return f + 1
	};
	ka = function(f) {
		return 0 >
			f ? -f : f
	};
	la = function(f, m) {
		return f > m ? f : m
	};
	ma = function(f, m) {
		return f < m ? f : m
	};
	na = Math.PI;
	oa = function(f) {
		return f + 0.5 | 0
	};
	pa = function(f) {
		return 0 <= f ? f | 0 : (f | 0) - 1
	};
	qa = function(f) {
		var m = f | 0;
		return m === f ? m : m + 1
	};
	ra = function(f, m, e, a, b, l, k, h) {
		var t, w, x, s;
		f < e ? (w = f, t = e) : (w = e, t = f);
		b < k ? (s = b, x = k) : (s = k, x = b);
		if (t < s || w > x) return !1;
		m < a ? (w = m, t = a) : (w = a, t = m);
		l < h ? (s = l, x = h) : (s = h, x = l);
		if (t < s || w > x) return !1;
		t = b - f + k - e;
		w = l - m + h - a;
		f = e - f;
		m = a - m;
		b = k - b;
		l = h - l;
		h = ka(m * b - l * f);
		return ka(b * w - l * t) > h ? !1 : ka(f * w - m * t) <= h
	};
	d.prototype.set = function(f,
		m, e, a) {
		this.left = f;
		this.top = m;
		this.right = e;
		this.bottom = a
	};
	d.prototype.copy = function(f) {
		this.left = f.left;
		this.top = f.top;
		this.right = f.right;
		this.bottom = f.bottom
	};
	d.prototype.width = function() {
		return this.right - this.left
	};
	d.prototype.height = function() {
		return this.bottom - this.top
	};
	d.prototype.offset = function(f, m) {
		this.left += f;
		this.top += m;
		this.right += f;
		this.bottom += m;
		return this
	};
	d.prototype.normalize = function() {
		var f = 0;
		this.left > this.right && (f = this.left, this.left = this.right, this.right = f);
		this.top > this.bottom &&
			(f = this.top, this.top = this.bottom, this.bottom = f)
	};
	d.prototype.Es = function(f) {
		return !(f.right < this.left || f.bottom < this.top || f.left > this.right || f.top > this.bottom)
	};
	d.prototype.Fs = function(f, m, e) {
		return !(f.right + m < this.left || f.bottom + e < this.top || f.left + m > this.right || f.top + e > this.bottom)
	};
	d.prototype.Zb = function(f, m) {
		return f >= this.left && f <= this.right && m >= this.top && m <= this.bottom
	};
	d.prototype.sr = function(f) {
		return this.left === f.left && this.top === f.top && this.right === f.right && this.bottom === f.bottom
	};
	sa = d;
	g.prototype.vh = function(f) {
		this.Aa = f.left;
		this.Ba = f.top;
		this.gb = f.right;
		this.hb = f.top;
		this.Ua = f.right;
		this.Va = f.bottom;
		this.Sa = f.left;
		this.Ta = f.bottom
	};
	g.prototype.op = function(f, m) {
		if (0 === m) this.vh(f);
		else {
			var e = Math.sin(m),
				a = Math.cos(m),
				b = f.left * e,
				l = f.top * e,
				k = f.right * e,
				e = f.bottom * e,
				h = f.left * a,
				t = f.top * a,
				w = f.right * a,
				a = f.bottom * a;
			this.Aa = h - l;
			this.Ba = t + b;
			this.gb = w - l;
			this.hb = t + k;
			this.Ua = w - e;
			this.Va = a + k;
			this.Sa = h - e;
			this.Ta = a + b
		}
	};
	g.prototype.offset = function(f, m) {
		this.Aa += f;
		this.Ba += m;
		this.gb += f;
		this.hb +=
			m;
		this.Ua += f;
		this.Va += m;
		this.Sa += f;
		this.Ta += m;
		return this
	};
	var q = 0,
		p = 0;
	g.prototype.mn = function(f) {
		b(this.Aa, this.gb, this.Ua, this.Sa);
		f.left = q;
		f.right = p;
		b(this.Ba, this.hb, this.Va, this.Ta);
		f.top = q;
		f.bottom = p
	};
	g.prototype.Zb = function(f, m) {
		var e = this.gb - this.Aa,
			a = this.hb - this.Ba,
			b = this.Ua - this.Aa,
			l = this.Va - this.Ba,
			k = f - this.Aa,
			h = m - this.Ba,
			t = e * e + a * a,
			w = e * b + a * l,
			a = e * k + a * h,
			x = b * b + l * l,
			s = b * k + l * h,
			c = 1 / (t * x - w * w),
			e = (x * a - w * s) * c,
			t = (t * s - w * a) * c;
		if (0 <= e && 0 < t && 1 > e + t) return !0;
		e = this.Sa - this.Aa;
		a = this.Ta - this.Ba;
		t = e * e + a *
			a;
		w = e * b + a * l;
		a = e * k + a * h;
		c = 1 / (t * x - w * w);
		e = (x * a - w * s) * c;
		t = (t * s - w * a) * c;
		return 0 <= e && 0 < t && 1 > e + t
	};
	g.prototype.Td = function(f, m) {
		if (m) switch (f) {
			case 0:
				return this.Aa;
			case 1:
				return this.gb;
			case 2:
				return this.Ua;
			case 3:
				return this.Sa;
			case 4:
				return this.Aa;
			default:
				return this.Aa
		} else switch (f) {
			case 0:
				return this.Ba;
			case 1:
				return this.hb;
			case 2:
				return this.Va;
			case 3:
				return this.Ta;
			case 4:
				return this.Ba;
			default:
				return this.Ba
		}
	};
	g.prototype.Bo = function() {
		return (this.Aa + this.gb + this.Ua + this.Sa) / 4
	};
	g.prototype.Co = function() {
		return (this.Ba +
			this.hb + this.Va + this.Ta) / 4
	};
	g.prototype.bo = function(f) {
		var m = f.Bo(),
			e = f.Co();
		if (this.Zb(m, e)) return !0;
		m = this.Bo();
		e = this.Co();
		if (f.Zb(m, e)) return !0;
		var a, b, l, k, h, t, w, x;
		for (w = 0; 4 > w; w++)
			for (x = 0; 4 > x; x++)
				if (m = this.Td(w, !0), e = this.Td(w, !1), a = this.Td(w + 1, !0), b = this.Td(w + 1, !1), l = f.Td(x, !0), k = f.Td(x, !1), h = f.Td(x + 1, !0), t = f.Td(x + 1, !1), ra(m, e, a, b, l, k, h, t)) return !0;
		return !1
	};
	ta = g;
	ua = function(f, m) {
		for (var e in m) m.hasOwnProperty(e) && (f[e] = m[e]);
		return f
	};
	va = function(f, m) {
		var e, a;
		m = pa(m);
		if (!(0 > m || m >= f.length)) {
			e =
				m;
			for (a = f.length - 1; e < a; e++) f[e] = f[e + 1];
			f.length = a
		}
	};
	wa = function(f, m) {
		f.length = m.length;
		var e, a;
		e = 0;
		for (a = m.length; e < a; e++) f[e] = m[e]
	};
	xa = function(f, m) {
		f.push.apply(f, m)
	};
	ya = function(f, m) {
		var e, a;
		e = 0;
		for (a = f.length; e < a; ++e)
			if (f[e] === m) return e;
		return -1
	};
	za = function(f, m) {
		var e = ya(f, m); - 1 !== e && va(f, e)
	};
	E = function(f) {
		return f / (180 / na)
	};
	Aa = function(f) {
		return f * (180 / na)
	};
	Ba = function(f) {
		f %= 360;
		0 > f && (f += 360);
		return f
	};
	Ca = function(f) {
		f %= 2 * na;
		0 > f && (f += 2 * na);
		return f
	};
	Da = function(f) {
		return Ba(Aa(f))
	};
	Ea = function(f) {
		return Ca(E(f))
	};
	Fa = function(f, m, e, a) {
		return Math.atan2(a - m, e - f)
	};
	Ha = function(f, m) {
		if (f === m) return 0;
		var e = Math.sin(f),
			a = Math.cos(f),
			b = Math.sin(m),
			l = Math.cos(m),
			e = e * b + a * l;
		return 1 <= e ? 0 : -1 >= e ? na : Math.acos(e)
	};
	Ia = function(f, m, e) {
		var a = Math.sin(f),
			b = Math.cos(f),
			l = Math.sin(m),
			k = Math.cos(m);
		return Math.acos(a * l + b * k) > e ? 0 < b * l - a * k ? Ca(f + e) : Ca(f - e) : Ca(m)
	};
	Ja = function(f, m) {
		var e = Math.sin(f),
			a = Math.cos(f),
			b = Math.sin(m),
			l = Math.cos(m);
		return 0 >= a * b - e * l
	};
	Ka = function(f, m, e, a, b, l) {
		if (0 === e) return l ? f : m;
		var k = Math.sin(e);
		e = Math.cos(e);
		f -= a;
		m -= b;
		var h = f * k;
		f = f * e - m * k;
		m = m * e + h;
		return l ? f + a : m + b
	};
	Oa = function(f, m, e, a) {
		f = e - f;
		m = a - m;
		return Math.sqrt(f * f + m * m)
	};
	Pa = function(f, m) {
		return !f !== !m
	};
	Qa = function(f) {
		for (var m in f)
			if (f.hasOwnProperty(m)) return !0;
		return !1
	};
	Ra = function(f) {
		for (var m in f) f.hasOwnProperty(m) && delete f[m]
	};
	var v = +new Date;
	Sa = function() {
		if ("undefined" !== typeof window.performance) {
			var f = window.performance;
			if ("undefined" !== typeof f.now) return f.now();
			if ("undefined" !== typeof f.webkitNow) return f.webkitNow();
			if ("undefined" !==
				typeof f.mozNow) return f.mozNow();
			if ("undefined" !== typeof f.msNow) return f.msNow()
		}
		return Date.now() - v
	};
	var u = !1,
		f = u = !1,
		x = !1;
	"undefined" !== typeof window && (u = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent), u = !u && /safari/i.test(navigator.userAgent), f = /(iphone|ipod|ipad)/i.test(navigator.userAgent), x = window.c2ejecta);
	var m = !u && !x && !f && "undefined" !== typeof Set && "undefined" !== typeof Set.prototype.forEach;
	c.prototype.contains = function(f) {
		return this.Sc() ? !1 : m ? this.od.has(f) : this.Id &&
			this.Id.hasOwnProperty(f)
	};
	c.prototype.add = function(f) {
		if (m) this.od.has(f) || (this.od.add(f), this.Wd = !1);
		else {
			var e = f.toString(),
				a = this.Id;
			a ? a.hasOwnProperty(e) || (a[e] = f, this.Kf++, this.Wd = !1) : (this.Id = {}, this.Id[e] = f, this.Kf = 1, this.Wd = !1)
		}
	};
	c.prototype.remove = function(f) {
		if (!this.Sc())
			if (m) this.od.has(f) && (this.od["delete"](f), this.Wd = !1);
			else if (this.Id) {
			f = f.toString();
			var e = this.Id;
			e.hasOwnProperty(f) && (delete e[f], this.Kf--, this.Wd = !1)
		}
	};
	c.prototype.clear = function() {
		this.Sc() || (m ? this.od.clear() :
			(this.Id = null, this.Kf = 0), this.gg.length = 0, this.Wd = !0)
	};
	c.prototype.Sc = function() {
		return 0 === this.count()
	};
	c.prototype.count = function() {
		return m ? this.od.size : this.Kf
	};
	var w = null,
		l = 0;
	c.prototype.Xt = function() {
		if (!this.Wd) {
			if (m) this.gg.length = this.od.size, w = this.gg, l = 0, this.od.forEach(a), w = null, l = 0;
			else {
				var f = this.gg;
				f.length = this.Kf;
				var e, b = 0,
					k = this.Id;
				if (k)
					for (e in k) k.hasOwnProperty(e) && (f[b++] = k[e])
			}
			this.Wd = !0
		}
	};
	c.prototype.fg = function() {
		this.Xt();
		return this.gg
	};
	da = c;
	new da;
	e.prototype.add = function(f) {
		this.y =
			f - this.wk;
		this.Kj = this.aa + this.y;
		this.wk = this.Kj - this.aa - this.y;
		this.aa = this.Kj
	};
	e.prototype.reset = function() {
		this.aa = this.Kj = this.y = this.wk = 0
	};
	Ta = e;
	Ya = function(f) {
		return f.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
	};
	h.prototype.wh = function(f) {
		this.bp = f;
		this.Zc = f.length / 2;
		this.ab.length = f.length;
		this.ci = this.di = -1;
		this.on = 0
	};
	h.prototype.Gf = function() {
		return !this.bp.length
	};
	h.prototype.La = function() {
		for (var f = this.ab, m = f[0], e = m, a = f[1], b = a, l, k, h = 1, t = this.Zc; h < t; ++h) k = 2 * h, l = f[k], k = f[k + 1], l < m && (m = l),
			l > e && (e = l), k < a && (a = k), k > b && (b = k);
		this.Zh = m;
		this.$h = e;
		this.ai = a;
		this.Yh = b
	};
	h.prototype.vh = function(f, m, e) {
		this.ab.length = 8;
		this.Zc = 4;
		var a = this.ab;
		a[0] = f.left - m;
		a[1] = f.top - e;
		a[2] = f.right - m;
		a[3] = f.top - e;
		a[4] = f.right - m;
		a[5] = f.bottom - e;
		a[6] = f.left - m;
		a[7] = f.bottom - e;
		this.di = f.right - f.left;
		this.ci = f.bottom - f.top;
		this.La()
	};
	h.prototype.Zf = function(f, m, e, a, b) {
		this.ab.length = 8;
		this.Zc = 4;
		var l = this.ab;
		l[0] = f.Aa - m;
		l[1] = f.Ba - e;
		l[2] = f.gb - m;
		l[3] = f.hb - e;
		l[4] = f.Ua - m;
		l[5] = f.Va - e;
		l[6] = f.Sa - m;
		l[7] = f.Ta - e;
		this.di = a;
		this.ci = b;
		this.La()
	};
	h.prototype.np = function(f) {
		this.Zc = f.Zc;
		wa(this.ab, f.ab);
		this.Zh = f.Zh;
		this.ai - f.ai;
		this.$h = f.$h;
		this.Yh = f.Yh
	};
	h.prototype.vf = function(f, m, e) {
		if (this.di !== f || this.ci !== m || this.on !== e) {
			this.di = f;
			this.ci = m;
			this.on = e;
			var a, l, b, k, h, t = 0,
				w = 1,
				x = this.bp,
				s = this.ab;
			0 !== e && (t = Math.sin(e), w = Math.cos(e));
			e = 0;
			for (b = this.Zc; e < b; e++) a = 2 * e, l = a + 1, k = x[a] * f, h = x[l] * m, s[a] = k * w - h * t, s[l] = h * w + k * t;
			this.La()
		}
	};
	h.prototype.Zb = function(f, m) {
		var e = this.ab;
		if (f === e[0] && m === e[1]) return !0;
		var a, l, b, k = this.Zc,
			h = this.Zh - 110,
			t = this.ai - 101,
			w = this.$h + 131,
			x = this.Yh + 120,
			s, c, p = 0,
			g = 0;
		for (a = 0; a < k; a++) l = 2 * a, b = 2 * ((a + 1) % k), s = e[l], l = e[l + 1], c = e[b], b = e[b + 1], ra(h, t, f, m, s, l, c, b) && p++, ra(w, x, f, m, s, l, c, b) && g++;
		return 1 === p % 2 || 1 === g % 2
	};
	h.prototype.Kg = function(f, m, e) {
		var a = f.ab,
			l = this.ab;
		if (this.Zb(a[0] + m, a[1] + e) || f.Zb(l[0] - m, l[1] - e)) return !0;
		var b, k, h, t, w, x, s, c, p, g, d, r;
		b = 0;
		for (t = this.Zc; b < t; b++)
			for (k = 2 * b, h = 2 * ((b + 1) % t), c = l[k], k = l[k + 1], p = l[h], g = l[h + 1], h = 0, s = f.Zc; h < s; h++)
				if (w = 2 * h, x = 2 * ((h + 1) % s), d = a[w] + m, w = a[w + 1] + e, r = a[x] + m, x =
					a[x + 1] + e, ra(c, k, p, g, d, w, r, x)) return !0;
		return !1
	};
	Za = h;
	s.prototype.Vk = function(f, m, e) {
		var a;
		a = this.cells[f];
		return a ? (a = a[m]) ? a : e ? (a = r(this, f, m), this.cells[f][m] = a) : null : e ? (a = r(this, f, m), this.cells[f] = {}, this.cells[f][m] = a) : null
	};
	s.prototype.Th = function(f) {
		return pa(f / this.Qq)
	};
	s.prototype.Uh = function(f) {
		return pa(f / this.Pq)
	};
	s.prototype.update = function(f, m, e) {
		var a, l, b, k, h;
		if (m)
			for (a = m.left, l = m.right; a <= l; ++a)
				for (b = m.top, k = m.bottom; b <= k; ++b)
					if (!e || !e.Zb(a, b))
						if (h = this.Vk(a, b, !1)) h.remove(f), h.Sc() &&
							(h.fh.clear(), 1E3 > t.length && t.push(h), this.cells[a][b] = null);
		if (e)
			for (a = e.left, l = e.right; a <= l; ++a)
				for (b = e.top, k = e.bottom; b <= k; ++b) m && m.Zb(a, b) || this.Vk(a, b, !0).Ds(f)
	};
	s.prototype.dp = function(f, m) {
		var e, a, b, l, k, h;
		e = this.Th(f.left);
		b = this.Uh(f.top);
		a = this.Th(f.right);
		for (k = this.Uh(f.bottom); e <= a; ++e)
			for (l = b; l <= k; ++l)(h = this.Vk(e, l, !1)) && h.nr(m)
	};
	$a = s;
	var t = [];
	n.prototype.Sc = function() {
		return this.fh.Sc()
	};
	n.prototype.Ds = function(f) {
		this.fh.add(f)
	};
	n.prototype.remove = function(f) {
		this.fh.remove(f)
	};
	n.prototype.nr =
		function(f) {
			xa(f, this.fh.fg())
		};
	ca = n;
	var k = "lighter xor copy destination-over source-in destination-in source-out destination-out source-atop destination-atop".split(" ");
	ab = function(f) {
		return 0 >= f || 11 <= f ? "source-over" : k[f - 1]
	};
	bb = function(f, m, e) {
		if (e) switch (f.Cb = e.ONE, f.zb = e.ONE_MINUS_SRC_ALPHA, m) {
			case 1:
				f.Cb = e.ONE;
				f.zb = e.ONE;
				break;
			case 3:
				f.Cb = e.ONE;
				f.zb = e.ZERO;
				break;
			case 4:
				f.Cb = e.ONE_MINUS_DST_ALPHA;
				f.zb = e.ONE;
				break;
			case 5:
				f.Cb = e.DST_ALPHA;
				f.zb = e.ZERO;
				break;
			case 6:
				f.Cb = e.ZERO;
				f.zb = e.SRC_ALPHA;
				break;
			case 7:
				f.Cb = e.ONE_MINUS_DST_ALPHA;
				f.zb = e.ZERO;
				break;
			case 8:
				f.Cb = e.ZERO;
				f.zb = e.ONE_MINUS_SRC_ALPHA;
				break;
			case 9:
				f.Cb = e.DST_ALPHA;
				f.zb = e.ONE_MINUS_SRC_ALPHA;
				break;
			case 10:
				f.Cb = e.ONE_MINUS_DST_ALPHA, f.zb = e.SRC_ALPHA
		}
	};
	fb = function(f) {
		return oa(1E6 * f) / 1E6
	};
	gb = function(f, m) {
		return "string" !== typeof f || "string" !== typeof m || f.length !== m.length ? !1 : f === m ? !0 : f.toLowerCase() === m.toLowerCase()
	}
})();
var cc = "undefined" !== typeof Float32Array ? Float32Array : Array;

function dc(d) {
	var g = new cc(3);
	d && (g[0] = d[0], g[1] = d[1], g[2] = d[2]);
	return g
}

function ec(d) {
	var g = new cc(16);
	d && (g[0] = d[0], g[1] = d[1], g[2] = d[2], g[3] = d[3], g[4] = d[4], g[5] = d[5], g[6] = d[6], g[7] = d[7], g[8] = d[8], g[9] = d[9], g[10] = d[10], g[11] = d[11], g[12] = d[12], g[13] = d[13], g[14] = d[14], g[15] = d[15]);
	return g
}

function fc(d, g) {
	g[0] = d[0];
	g[1] = d[1];
	g[2] = d[2];
	g[3] = d[3];
	g[4] = d[4];
	g[5] = d[5];
	g[6] = d[6];
	g[7] = d[7];
	g[8] = d[8];
	g[9] = d[9];
	g[10] = d[10];
	g[11] = d[11];
	g[12] = d[12];
	g[13] = d[13];
	g[14] = d[14];
	g[15] = d[15]
}

function gc(d, g) {
	var b = g[0],
		c = g[1];
	g = g[2];
	d[0] *= b;
	d[1] *= b;
	d[2] *= b;
	d[3] *= b;
	d[4] *= c;
	d[5] *= c;
	d[6] *= c;
	d[7] *= c;
	d[8] *= g;
	d[9] *= g;
	d[10] *= g;
	d[11] *= g
}

function hc(d, g, b, c) {
		c || (c = ec());
		var a, e, h, s, r, n, q, p, v = d[0],
			u = d[1];
		d = d[2];
		e = b[0];
		h = b[1];
		a = b[2];
		b = g[1];
		n = g[2];
		v === g[0] && u === b && d === n ? (d = c, d[0] = 1, d[1] = 0, d[2] = 0, d[3] = 0, d[4] = 0, d[5] = 1, d[6] = 0, d[7] = 0, d[8] = 0, d[9] = 0, d[10] = 1, d[11] = 0, d[12] = 0, d[13] = 0, d[14] = 0, d[15] = 1) : (b = v - g[0], n = u - g[1], q = d - g[2], p = 1 / Math.sqrt(b * b + n * n + q * q), b *= p, n *= p, q *= p, g = h * q - a * n, a = a * b - e * q, e = e * n - h * b, (p = Math.sqrt(g * g + a * a + e * e)) ? (p = 1 / p, g *= p, a *= p, e *= p) : e = a = g = 0, h = n * e - q * a, s = q * g - b * e, r = b * a - n * g, (p = Math.sqrt(h * h + s * s + r * r)) ? (p = 1 / p, h *= p, s *= p, r *= p) : r = s = h = 0,
			c[0] = g, c[1] = h, c[2] = b, c[3] = 0, c[4] = a, c[5] = s, c[6] = n, c[7] = 0, c[8] = e, c[9] = r, c[10] = q, c[11] = 0, c[12] = -(g * v + a * u + e * d), c[13] = -(h * v + s * u + r * d), c[14] = -(b * v + n * u + q * d), c[15] = 1)
	}
	(function() {
		function d(e) {
			this.kl = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
			this.height = this.width = 0;
			this.pn = dc([0, 0, 100]);
			this.xo = dc([0, 0, 0]);
			this.Hp = dc([0, 1, 0]);
			this.Im = dc([1, 1, 1]);
			this.zn = !0;
			this.El = ec();
			this.Fc = ec();
			this.po = ec();
			this.Fk = ec();
			this.A = e;
			this.Yn()
		}

		function g(e, a, b) {
			this.A = e;
			this.xh = a;
			this.name = b;
			this.Ec = e.getAttribLocation(a, "aPos");
			this.ie = e.getAttribLocation(a, "aTex");
			this.vo = e.getUniformLocation(a, "matP");
			this.Nf = e.getUniformLocation(a, "matMV");
			this.Of =
				e.getUniformLocation(a, "opacity");
			this.wo = e.getUniformLocation(a, "samplerFront");
			this.Yg = e.getUniformLocation(a, "samplerBack");
			this.$e = e.getUniformLocation(a, "destStart");
			this.Ze = e.getUniformLocation(a, "destEnd");
			this.Bl = e.getUniformLocation(a, "seconds");
			this.Al = e.getUniformLocation(a, "pixelWidth");
			this.zl = e.getUniformLocation(a, "pixelHeight");
			this.Xg = e.getUniformLocation(a, "layerScale");
			this.Wg = e.getUniformLocation(a, "layerAngle");
			this.Zg = e.getUniformLocation(a, "viewOrigin");
			this.As = !!(this.Al ||
				this.zl || this.Bl || this.Yg || this.$e || this.Ze || this.Xg || this.Wg || this.Zg);
			this.Of && e.uniform1f(this.Of, 1);
			this.wo && e.uniform1i(this.wo, 0);
			this.Yg && e.uniform1i(this.Yg, 1);
			this.$e && e.uniform2f(this.$e, 0, 0);
			this.Ze && e.uniform2f(this.Ze, 1, 1);
			this.Xg && e.uniform1f(this.Xg, 1);
			this.Wg && e.uniform1f(this.Wg, 0);
			this.Zg && e.uniform2f(this.Zg, 0, 0);
			this.Pe = !1
		}

		function b(e, a) {
			this.type = e;
			this.C = a;
			this.A = a.A;
			this.jd = this.Jc = this.Po = 0;
			this.na = this.cd = null;
			this.pp = []
		}
		d.prototype.Yn = function() {
			var e = this.A,
				a;
			this.qo = 1;
			this.Ue = this.Te = null;
			this.vn = 1;
			e.clearColor(0, 0, 0, 0);
			e.clear(e.COLOR_BUFFER_BIT);
			e.enable(e.BLEND);
			e.blendFunc(e.ONE, e.ONE_MINUS_SRC_ALPHA);
			e.disable(e.CULL_FACE);
			e.disable(e.DEPTH_TEST);
			this.ro = e.ONE;
			this.oo = e.ONE_MINUS_SRC_ALPHA;
			this.Wl = e.createBuffer();
			e.bindBuffer(e.ARRAY_BUFFER, this.Wl);
			this.Jh = Array(4);
			this.Bh = Array(4);
			for (a = 0; 4 > a; a++) this.Jh[a] = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.Jh[a]), this.Bh[a] = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, this.Bh[a]);
			this.yd = 0;
			this.Cs = e.createBuffer();
			e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, this.Cs);
			this.Fm = new Float32Array(16E3);
			this.um = new Float32Array(16E3);
			this.et = new Float32Array(32E3);
			for (var b = new Uint16Array(12E3), c = a = 0; 12E3 > a;) b[a++] = c, b[a++] = c + 1, b[a++] = c + 2, b[a++] = c, b[a++] = c + 2, b[a++] = c + 3, c += 4;
			e.bufferData(e.ELEMENT_ARRAY_BUFFER, b, e.STATIC_DRAW);
			this.Xl = this.ud = 0;
			this.cb = [];
			a = this.Ck({
					src: "varying mediump vec2 vTex;\nuniform lowp float opacity;\nuniform lowp sampler2D samplerFront;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, vTex);\n\tgl_FragColor *= opacity;\n}"
				},
				"attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", "<default>");
			this.cb.push(a);
			a = this.Ck({
					src: "uniform mediump sampler2D samplerFront;\nvarying lowp float opacity;\nvoid main(void) {\n\tgl_FragColor = texture2D(samplerFront, gl_PointCoord);\n\tgl_FragColor *= opacity;\n}"
				}, "attribute vec4 aPos;\nvarying float opacity;\nuniform mat4 matP;\nuniform mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tgl_PointSize = aPos.z;\n\topacity = aPos.w;\n}",
				"<point>");
			this.cb.push(a);
			for (var g in ic) ic.hasOwnProperty(g) && this.cb.push(this.Ck(ic[g], "attribute highp vec2 aPos;\nattribute mediump vec2 aTex;\nvarying mediump vec2 vTex;\nuniform highp mat4 matP;\nuniform highp mat4 matMV;\nvoid main(void) {\n\tgl_Position = matP * matMV * vec4(aPos.x, aPos.y, 0.0, 1.0);\n\tvTex = aTex;\n}", g));
			e.activeTexture(e.TEXTURE0);
			e.bindTexture(e.TEXTURE_2D, null);
			this.Vd = [];
			this.wd = 0;
			this.cc = !1;
			this.wn = this.Qg = -1;
			this.tg = null;
			this.Sr = e.createFramebuffer();
			this.gp =
				null;
			this.ue = dc([0, 0, 0]);
			this.yo = e.getParameter(e.ALIASED_POINT_SIZE_RANGE)[1];
			2048 < this.yo && (this.yo = 2048);
			this.rd(0)
		};
		d.prototype.Ck = function(e, a, b) {
			var c = this.A,
				d = c.createShader(c.FRAGMENT_SHADER);
			c.shaderSource(d, e.src);
			c.compileShader(d);
			if (!c.getShaderParameter(d, c.COMPILE_STATUS)) return c.deleteShader(d), null;
			var q = c.createShader(c.VERTEX_SHADER);
			c.shaderSource(q, a);
			c.compileShader(q);
			if (!c.getShaderParameter(q, c.COMPILE_STATUS)) return c.deleteShader(d), c.deleteShader(q), null;
			a = c.createProgram();
			c.attachShader(a, d);
			c.attachShader(a, q);
			c.linkProgram(a);
			if (!c.getProgramParameter(a, c.LINK_STATUS)) return c.deleteShader(d), c.deleteShader(q), c.deleteProgram(a), null;
			c.useProgram(a);
			c.deleteShader(d);
			c.deleteShader(q);
			b = new g(c, a, b);
			b.Nk = e.Nk || 0;
			b.Ok = e.Ok || 0;
			b.un = !!e.un;
			b.jn = !!e.jn;
			b.R = e.R || [];
			e = 0;
			for (d = b.R.length; e < d; e++) b.R[e][1] = c.getUniformLocation(a, b.R[e][0]), c.uniform1f(b.R[e][1], 0);
			return b
		};
		d.prototype.$k = function(e) {
			var a, b;
			a = 0;
			for (b = this.cb.length; a < b; a++)
				if (this.cb[a].name === e) return a;
			return -1
		};
		d.prototype.$o = function(e, a, b) {
			var c = this.Fc,
				g = this.El,
				d = [0, 0, 0, 0, 0, 0, 0, 0];
			d[0] = c[0] * e + c[4] * a + c[12];
			d[1] = c[1] * e + c[5] * a + c[13];
			d[2] = c[2] * e + c[6] * a + c[14];
			d[3] = c[3] * e + c[7] * a + c[15];
			d[4] = g[0] * d[0] + g[4] * d[1] + g[8] * d[2] + g[12] * d[3];
			d[5] = g[1] * d[0] + g[5] * d[1] + g[9] * d[2] + g[13] * d[3];
			d[6] = g[2] * d[0] + g[6] * d[1] + g[10] * d[2] + g[14] * d[3];
			d[7] = -d[2];
			0 !== d[7] && (d[7] = 1 / d[7], d[4] *= d[7], d[5] *= d[7], d[6] *= d[7], b[0] = (0.5 * d[4] + 0.5) * this.width, b[1] = (0.5 * d[5] + 0.5) * this.height)
		};
		d.prototype.Yf = function(e, a, b) {
			if (this.width !==
				e || this.height !== a || b) {
				this.Ke();
				this.width = e;
				this.height = a;
				this.A.viewport(0, 0, e, a);
				a = e / a;
				var c = this.El,
					d;
				d = 1 * Math.tan(45 * Math.PI / 360);
				a *= d;
				e = -a;
				b = -d;
				c || (c = ec());
				var g = a - e,
					p = d - b;
				c[0] = 2 / g;
				c[1] = 0;
				c[2] = 0;
				c[3] = 0;
				c[4] = 0;
				c[5] = 2 / p;
				c[6] = 0;
				c[7] = 0;
				c[8] = (a + e) / g;
				c[9] = (d + b) / p;
				c[10] = -1001 / 999;
				c[11] = -1;
				c[12] = 0;
				c[13] = 0;
				c[14] = -2E3 / 999;
				c[15] = 0;
				hc(this.pn, this.xo, this.Hp, this.Fc);
				e = [0, 0];
				a = [0, 0];
				this.$o(0, 0, e);
				this.$o(1, 1, a);
				this.Im[0] = 1 / (a[0] - e[0]);
				this.Im[1] = -1 / (a[1] - e[1]);
				e = 0;
				for (a = this.cb.length; e < a; e++) b = this.cb[e],
					b.Pe = !1, b.vo && (this.A.useProgram(b.xh), this.A.uniformMatrix4fv(b.vo, !1, this.El));
				this.A.useProgram(this.cb[this.Qg].xh);
				this.A.bindTexture(this.A.TEXTURE_2D, null);
				this.A.activeTexture(this.A.TEXTURE1);
				this.A.bindTexture(this.A.TEXTURE_2D, null);
				this.A.activeTexture(this.A.TEXTURE0);
				this.Ue = this.Te = null
			}
		};
		d.prototype.ne = function() {
			hc(this.pn, this.xo, this.Hp, this.Fc);
			gc(this.Fc, this.Im)
		};
		d.prototype.translate = function(e, a) {
			if (0 !== e || 0 !== a) {
				this.ue[0] = e;
				this.ue[1] = a;
				this.ue[2] = 0;
				var b = this.Fc,
					c = this.ue,
					d = c[0],
					g = c[1],
					c = c[2];
				b[12] = b[0] * d + b[4] * g + b[8] * c + b[12];
				b[13] = b[1] * d + b[5] * g + b[9] * c + b[13];
				b[14] = b[2] * d + b[6] * g + b[10] * c + b[14];
				b[15] = b[3] * d + b[7] * g + b[11] * c + b[15]
			}
		};
		d.prototype.scale = function(e, a) {
			if (1 !== e || 1 !== a) this.ue[0] = e, this.ue[1] = a, this.ue[2] = 1, gc(this.Fc, this.ue)
		};
		d.prototype.hp = function(e) {
			if (0 !== e) {
				var a = this.Fc,
					b, c = Math.sin(e);
				e = Math.cos(e);
				var d = a[0],
					g = a[1],
					p = a[2],
					v = a[3],
					u = a[4],
					f = a[5],
					x = a[6],
					m = a[7];
				b ? a !== b && (b[8] = a[8], b[9] = a[9], b[10] = a[10], b[11] = a[11], b[12] = a[12], b[13] = a[13], b[14] = a[14], b[15] =
					a[15]) : b = a;
				b[0] = d * e + u * c;
				b[1] = g * e + f * c;
				b[2] = p * e + x * c;
				b[3] = v * e + m * c;
				b[4] = d * -c + u * e;
				b[5] = g * -c + f * e;
				b[6] = p * -c + x * e;
				b[7] = v * -c + m * e
			}
		};
		d.prototype.ve = function() {
			for (var e = !1, a = 0; 16 > a; a++)
				if (this.po[a] !== this.Fc[a]) {
					e = !0;
					break
				}
			e && (e = this.$c(), e.type = 5, e.na ? fc(this.Fc, e.na) : e.na = ec(this.Fc), fc(this.Fc, this.po), this.cc = !1)
		};
		b.prototype.ir = function() {
			this.A.bindTexture(this.A.TEXTURE_2D, this.cd)
		};
		b.prototype.jr = function() {
			var e = this.A;
			e.activeTexture(e.TEXTURE1);
			e.bindTexture(e.TEXTURE_2D, this.cd);
			e.activeTexture(e.TEXTURE0)
		};
		b.prototype.fr = function() {
			var e = this.Po,
				a = this.C;
			a.vn = e;
			a = a.tg;
			a.Of && this.A.uniform1f(a.Of, e)
		};
		b.prototype.cr = function() {
			this.A.drawElements(this.A.TRIANGLES, this.jd, this.A.UNSIGNED_SHORT, 2 * this.Jc)
		};
		b.prototype.er = function() {
			this.A.blendFunc(this.Jc, this.jd)
		};
		b.prototype.lr = function() {
			var e, a, b, c = this.C.cb,
				d = this.C.wn;
			e = 0;
			for (a = c.length; e < a; e++) b = c[e], e === d && b.Nf ? (this.A.uniformMatrix4fv(b.Nf, !1, this.na), b.Pe = !0) : b.Pe = !1;
			fc(this.na, this.C.Fk)
		};
		b.prototype.dr = function() {
			var e = this.A,
				a = this.C;
			this.cd ?
				(a.Ue === this.cd && (e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, null), a.Ue = null, e.activeTexture(e.TEXTURE0)), e.bindFramebuffer(e.FRAMEBUFFER, a.Sr), e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, this.cd, 0)) : (e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, null, 0), e.bindFramebuffer(e.FRAMEBUFFER, null))
		};
		b.prototype.$q = function() {
			var e = this.A;
			0 === this.Jc ? (e.clearColor(this.na[0], this.na[1], this.na[2], this.na[3]), e.clear(e.COLOR_BUFFER_BIT)) : (e.enable(e.SCISSOR_TEST),
				e.scissor(this.na[0], this.na[1], this.na[2], this.na[3]), e.clearColor(0, 0, 0, 0), e.clear(this.A.COLOR_BUFFER_BIT), e.disable(e.SCISSOR_TEST))
		};
		b.prototype.br = function() {
			var e = this.A,
				a = this.C,
				b = a.cb[1];
			e.useProgram(b.xh);
			!b.Pe && b.Nf && (e.uniformMatrix4fv(b.Nf, !1, a.Fk), b.Pe = !0);
			e.enableVertexAttribArray(b.Ec);
			e.bindBuffer(e.ARRAY_BUFFER, a.Wl);
			e.vertexAttribPointer(b.Ec, 4, e.FLOAT, !1, 0, 0);
			e.drawArrays(e.POINTS, this.Jc / 4, this.jd);
			b = a.tg;
			e.useProgram(b.xh);
			0 <= b.Ec && (e.enableVertexAttribArray(b.Ec), e.bindBuffer(e.ARRAY_BUFFER,
				a.Jh[a.yd]), e.vertexAttribPointer(b.Ec, 2, e.FLOAT, !1, 0, 0));
			0 <= b.ie && (e.enableVertexAttribArray(b.ie), e.bindBuffer(e.ARRAY_BUFFER, a.Bh[a.yd]), e.vertexAttribPointer(b.ie, 2, e.FLOAT, !1, 0, 0))
		};
		b.prototype.gr = function() {
			var e = this.A,
				a = this.C,
				b = a.cb[this.Jc];
			a.wn = this.Jc;
			a.tg = b;
			e.useProgram(b.xh);
			!b.Pe && b.Nf && (e.uniformMatrix4fv(b.Nf, !1, a.Fk), b.Pe = !0);
			b.Of && e.uniform1f(b.Of, a.vn);
			0 <= b.Ec && (e.enableVertexAttribArray(b.Ec), e.bindBuffer(e.ARRAY_BUFFER, a.Jh[a.yd]), e.vertexAttribPointer(b.Ec, 2, e.FLOAT, !1, 0, 0));
			0 <= b.ie && (e.enableVertexAttribArray(b.ie), e.bindBuffer(e.ARRAY_BUFFER, a.Bh[a.yd]), e.vertexAttribPointer(b.ie, 2, e.FLOAT, !1, 0, 0))
		};
		b.prototype.hr = function() {
			var e, a, b = this.C.tg,
				c = this.A;
			e = this.na;
			b.Yg && this.C.Ue !== this.cd && (c.activeTexture(c.TEXTURE1), c.bindTexture(c.TEXTURE_2D, this.cd), this.C.Ue = this.cd, c.activeTexture(c.TEXTURE0));
			b.Al && c.uniform1f(b.Al, e[0]);
			b.zl && c.uniform1f(b.zl, e[1]);
			b.$e && c.uniform2f(b.$e, e[2], e[3]);
			b.Ze && c.uniform2f(b.Ze, e[4], e[5]);
			b.Xg && c.uniform1f(b.Xg, e[6]);
			b.Wg && c.uniform1f(b.Wg,
				e[7]);
			b.Zg && c.uniform2f(b.Zg, e[8], e[9]);
			b.Bl && c.uniform1f(b.Bl, Sa() / 1E3);
			if (b.R.length)
				for (e = 0, a = b.R.length; e < a; e++) c.uniform1f(b.R[e][1], this.pp[e])
		};
		d.prototype.$c = function() {
			this.wd === this.Vd.length && this.Vd.push(new b(0, this));
			return this.Vd[this.wd++]
		};
		d.prototype.Ke = function() {
			if (0 !== this.wd && !this.A.isContextLost()) {
				var e = this.A;
				0 < this.Xl && (e.bindBuffer(e.ARRAY_BUFFER, this.Wl), e.bufferData(e.ARRAY_BUFFER, this.et.subarray(0, this.Xl), e.STREAM_DRAW), a && 0 <= a.Ec && "<point>" === a.name && e.vertexAttribPointer(a.Ec,
					4, e.FLOAT, !1, 0, 0));
				if (0 < this.ud) {
					var a = this.tg;
					e.bindBuffer(e.ARRAY_BUFFER, this.Jh[this.yd]);
					e.bufferData(e.ARRAY_BUFFER, this.Fm.subarray(0, this.ud), e.STREAM_DRAW);
					a && 0 <= a.Ec && "<point>" !== a.name && e.vertexAttribPointer(a.Ec, 2, e.FLOAT, !1, 0, 0);
					e.bindBuffer(e.ARRAY_BUFFER, this.Bh[this.yd]);
					e.bufferData(e.ARRAY_BUFFER, this.um.subarray(0, this.ud), e.STREAM_DRAW);
					a && 0 <= a.ie && "<point>" !== a.name && e.vertexAttribPointer(a.ie, 2, e.FLOAT, !1, 0, 0)
				}
				for (var b, e = 0, a = this.wd; e < a; e++) switch (b = this.Vd[e], b.type) {
					case 1:
						b.cr();
						break;
					case 2:
						b.ir();
						break;
					case 3:
						b.fr();
						break;
					case 4:
						b.er();
						break;
					case 5:
						b.lr();
						break;
					case 6:
						b.dr();
						break;
					case 7:
						b.$q();
						break;
					case 8:
						b.br();
						break;
					case 9:
						b.gr();
						break;
					case 10:
						b.hr();
						break;
					case 11:
						b.jr()
				}
				this.Xl = this.ud = this.wd = 0;
				this.cc = !1;
				this.yd++;
				4 <= this.yd && (this.yd = 0)
			}
		};
		d.prototype.gf = function(a) {
			if (a !== this.qo) {
				var b = this.$c();
				b.type = 3;
				this.qo = b.Po = a;
				this.cc = !1
			}
		};
		d.prototype.hc = function(a) {
			if (a !== this.Te) {
				var b = this.$c();
				b.type = 2;
				this.Te = b.cd = a;
				this.cc = !1
			}
		};
		d.prototype.oe = function(a, b) {
			if (a !==
				this.ro || b !== this.oo) {
				var c = this.$c();
				c.type = 4;
				c.Jc = a;
				c.jd = b;
				this.ro = a;
				this.oo = b;
				this.cc = !1
			}
		};
		d.prototype.kp = function() {
			this.oe(this.A.ONE, this.A.ONE_MINUS_SRC_ALPHA)
		};
		d.prototype.wj = function(a, b, c, d, g, q, p, v) {
			15992 <= this.ud && this.Ke();
			var u = this.ud,
				f = this.Fm,
				x = this.um;
			if (this.cc) this.Vd[this.wd - 1].jd += 6;
			else {
				var m = this.$c();
				m.type = 1;
				m.Jc = 3 * (u / 4);
				m.jd = 6;
				this.cc = !0
			}
			f[u] = a;
			x[u++] = 0;
			f[u] = b;
			x[u++] = 0;
			f[u] = c;
			x[u++] = 1;
			f[u] = d;
			x[u++] = 0;
			f[u] = g;
			x[u++] = 1;
			f[u] = q;
			x[u++] = 1;
			f[u] = p;
			x[u++] = 0;
			f[u] = v;
			x[u++] = 1;
			this.ud =
				u
		};
		d.prototype.nd = function(a, b, c, d, g, q, p, v, u) {
			15992 <= this.ud && this.Ke();
			var f = this.ud,
				x = this.Fm,
				m = this.um;
			if (this.cc) this.Vd[this.wd - 1].jd += 6;
			else {
				var w = this.$c();
				w.type = 1;
				w.Jc = 3 * (f / 4);
				w.jd = 6;
				this.cc = !0
			}
			var w = u.left,
				l = u.top,
				t = u.right;
			u = u.bottom;
			x[f] = a;
			m[f++] = w;
			x[f] = b;
			m[f++] = l;
			x[f] = c;
			m[f++] = t;
			x[f] = d;
			m[f++] = l;
			x[f] = g;
			m[f++] = t;
			x[f] = q;
			m[f++] = u;
			x[f] = p;
			m[f++] = w;
			x[f] = v;
			m[f++] = u;
			this.ud = f
		};
		d.prototype.rd = function(a) {
			if (this.Qg !== a) {
				if (!this.cb[a]) {
					if (0 === this.Qg) return;
					a = 0
				}
				var b = this.$c();
				b.type = 9;
				this.Qg =
					b.Jc = a;
				this.cc = !1
			}
		};
		d.prototype.nh = function(a) {
			a = this.cb[a];
			return !(!a.$e && !a.Ze)
		};
		d.prototype.Zl = function(a) {
			a = this.cb[a];
			return !!(a.$e || a.Ze || a.un)
		};
		d.prototype.jt = function(a) {
			a = this.cb[a];
			return 0 !== a.Nk || 0 !== a.Ok
		};
		d.prototype.ds = function(a) {
			return this.cb[a].Nk
		};
		d.prototype.es = function(a) {
			return this.cb[a].Ok
		};
		d.prototype.gs = function(a, b) {
			return this.cb[a].R[b][2]
		};
		d.prototype.tj = function(a) {
			return this.cb[a].jn
		};
		d.prototype.Xf = function(a, b, c, d, g, q, p, v, u, f, x, m) {
			var w = this.cb[this.Qg],
				l, t;
			if (w.As ||
				m.length) {
				l = this.$c();
				l.type = 10;
				l.na ? fc(this.Fc, l.na) : l.na = ec();
				t = l.na;
				t[0] = b;
				t[1] = c;
				t[2] = d;
				t[3] = g;
				t[4] = q;
				t[5] = p;
				t[6] = v;
				t[7] = u;
				t[8] = f;
				t[9] = x;
				l.cd = w.Yg ? a : null;
				if (m.length)
					for (c = l.pp, c.length = m.length, a = 0, b = m.length; a < b; a++) c[a] = m[a];
				this.cc = !1
			}
		};
		d.prototype.clear = function(a, b, c, d) {
			var g = this.$c();
			g.type = 7;
			g.Jc = 0;
			g.na || (g.na = ec());
			g.na[0] = a;
			g.na[1] = b;
			g.na[2] = c;
			g.na[3] = d;
			this.cc = !1
		};
		d.prototype.clearRect = function(a, b, c, d) {
			if (!(0 > c || 0 > d)) {
				var g = this.$c();
				g.type = 7;
				g.Jc = 1;
				g.na || (g.na = ec());
				g.na[0] = a;
				g.na[1] =
					b;
				g.na[2] = c;
				g.na[3] = d;
				this.cc = !1
			}
		};
		d.prototype.it = function() {
			this.Ke();
			this.A.flush()
		};
		var c = [],
			a = {};
		d.prototype.Lf = function(b, h, g, d) {
			h = !!h;
			g = !!g;
			var n = b.src + "," + h + "," + g + (h ? ",undefined" : ""),
				q = null;
			if ("undefined" !== typeof b.src && a.hasOwnProperty(n)) return q = a[n], q.bi++, q;
			this.Ke();
			var p = this.A,
				v = ia(b.width) && ia(b.height),
				q = p.createTexture();
			p.bindTexture(p.TEXTURE_2D, q);
			p.pixelStorei(p.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0);
			var u = p.RGBA,
				f = p.RGBA,
				x = p.UNSIGNED_BYTE;
			if (d && !this.kl) switch (d) {
				case 1:
					f = u = p.RGB;
					break;
				case 2:
					x = p.UNSIGNED_SHORT_4_4_4_4;
					break;
				case 3:
					x = p.UNSIGNED_SHORT_5_5_5_1;
					break;
				case 4:
					f = u = p.RGB, x = p.UNSIGNED_SHORT_5_6_5
			}
			if (!v && h) {
				d = document.createElement("canvas");
				d.width = ja(b.width);
				d.height = ja(b.height);
				var m = d.getContext("2d");
				m.webkitImageSmoothingEnabled = g;
				m.mozImageSmoothingEnabled = g;
				m.msImageSmoothingEnabled = g;
				m.imageSmoothingEnabled = g;
				m.drawImage(b, 0, 0, b.width, b.height, 0, 0, d.width, d.height);
				p.texImage2D(p.TEXTURE_2D, 0, u, f, x, d)
			} else p.texImage2D(p.TEXTURE_2D, 0, u, f, x, b);
			h ? (p.texParameteri(p.TEXTURE_2D,
				p.TEXTURE_WRAP_S, p.REPEAT), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.REPEAT)) : (p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_S, p.CLAMP_TO_EDGE), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_WRAP_T, p.CLAMP_TO_EDGE));
			g ? (p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER, p.LINEAR), v && this.zn ? (p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.LINEAR_MIPMAP_LINEAR), p.generateMipmap(p.TEXTURE_2D)) : p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.LINEAR)) : (p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MAG_FILTER,
				p.NEAREST), p.texParameteri(p.TEXTURE_2D, p.TEXTURE_MIN_FILTER, p.NEAREST));
			p.bindTexture(p.TEXTURE_2D, null);
			this.Te = null;
			q.qg = b.width;
			q.pg = b.height;
			q.bi = 1;
			q.nn = n;
			c.push(q);
			return a[n] = q
		};
		d.prototype.$d = function(a, b, g) {
			var d;
			this.Ke();
			var n = this.A;
			this.kl && (d = !1);
			var q = n.createTexture();
			n.bindTexture(n.TEXTURE_2D, q);
			n.texImage2D(n.TEXTURE_2D, 0, n.RGBA, a, b, 0, n.RGBA, d ? n.UNSIGNED_SHORT_4_4_4_4 : n.UNSIGNED_BYTE, null);
			n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE);
			n.texParameteri(n.TEXTURE_2D,
				n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE);
			n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, g ? n.LINEAR : n.NEAREST);
			n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, g ? n.LINEAR : n.NEAREST);
			n.bindTexture(n.TEXTURE_2D, null);
			this.Te = null;
			q.qg = a;
			q.pg = b;
			c.push(q);
			return q
		};
		d.prototype.deleteTexture = function(b) {
			b && ("undefined" !== typeof b.bi && 1 < b.bi ? b.bi-- : (this.Ke(), b === this.Te && (this.A.bindTexture(this.A.TEXTURE_2D, null), this.Te = null), b === this.Ue && (this.A.activeTexture(this.A.TEXTURE1), this.A.bindTexture(this.A.TEXTURE_2D,
				null), this.A.activeTexture(this.A.TEXTURE0), this.Ue = null), za(c, b), "undefined" !== typeof b.nn && delete a[b.nn], this.A.deleteTexture(b)))
		};
		d.prototype.qd = function(a) {
			if (a !== this.gp) {
				var b = this.$c();
				b.type = 6;
				this.gp = b.cd = a;
				this.cc = !1
			}
		};
		hb = d
	})();
(function() {
	function d(f) {
		if (f && (f.getContext || f.dc) && !f.c2runtime) {
			f.c2runtime = this;
			var a = this;
			this.Pi = /crosswalk/i.test(navigator.userAgent) || /xwalk/i.test(navigator.userAgent) || !("undefined" === typeof window.c2isCrosswalk || !window.c2isCrosswalk);
			this.Uc = !this.Pi && "undefined" !== typeof window.device && ("undefined" !== typeof window.device.cordova || "undefined" !== typeof window.device.phonegap) || "undefined" !== typeof window.c2isphonegap && window.c2isphonegap;
			this.Qb = !!f.dc;
			this.Ef = "undefined" !== typeof window.AppMobi ||
				this.Qb;
			this.pc = !!window.c2cocoonjs;
			this.Gd = !!window.c2ejecta;
			this.pc && (CocoonJS.App.onSuspended.addEventListener(function() {
				a.setSuspended(!0)
			}), CocoonJS.App.onActivated.addEventListener(function() {
				a.setSuspended(!1)
			}));
			this.Gd && (document.addEventListener("pagehide", function() {
				a.setSuspended(!0)
			}), document.addEventListener("pageshow", function() {
				a.setSuspended(!1)
			}), document.addEventListener("resize", function() {
				a.setSize(window.innerWidth, window.innerHeight)
			}));
			this.lb = this.Qb || this.pc || this.Gd;
			this.ho =
				/tizen/i.test(navigator.userAgent);
			this.Oi = /android/i.test(navigator.userAgent) && !this.ho;
			this.kl = /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent);
			this.rl = /iphone/i.test(navigator.userAgent) || /ipod/i.test(navigator.userAgent);
			this.lo = /ipad/i.test(navigator.userAgent);
			this.Ti = this.rl || this.lo || this.Gd;
			this.Os = this.rl && /os\s6/i.test(navigator.userAgent);
			this.Lg = /chrome/i.test(navigator.userAgent) || /chromium/i.test(navigator.userAgent);
			this.Gs = /amazonwebappplatform/i.test(navigator.userAgent);
			this.eo = /firefox/i.test(navigator.userAgent);
			this.fo = !this.Lg && /safari/i.test(navigator.userAgent);
			this.Ks = /windows/i.test(navigator.userAgent);
			this.ge = "undefined" !== typeof window.c2nodewebkit || /nodewebkit/i.test(navigator.userAgent);
			this.Ms = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
			this.Ns = !("undefined" === typeof window.c2isWindows8Capable || !window.c2isWindows8Capable);
			this.pl = !("undefined" === typeof window.c2isWindowsPhone8 || !window.c2isWindowsPhone8);
			this.jo = !("undefined" ===
				typeof window.c2isWindowsPhone81 || !window.c2isWindowsPhone81);
			this.io = this.Ms || this.Ns || this.jo;
			this.Hs = !("undefined" === typeof window.c2isBlackberry10 || !window.c2isBlackberry10);
			this.co = this.Oi && !this.Lg && !this.eo && !this.Gs && !this.lb;
			this.devicePixelRatio = 1;
			this.fe = this.Uc || this.Pi || this.Ef || this.pc || this.Oi || this.Ti || this.pl || this.jo || this.Hs || this.ho || this.Gd;
			this.fe || (this.fe = /(blackberry|bb10|playbook|palm|symbian|nokia|windows\s+ce|phone|mobile|tablet|kindle|silk)/i.test(navigator.userAgent));
			"undefined" === typeof cr_is_preview || this.ge || "?nw" !== window.location.search && !/nodewebkit/i.test(navigator.userAgent) || (this.ge = !0);
			this.Is = "undefined" !== typeof cr_is_preview && -1 < window.location.search.indexOf("debug");
			this.canvas = f;
			this.qn = document.getElementById("c2canvasdiv");
			this.ra = this.C = this.A = null;
			this.Rk = "";
			this.Ci = !1;
			this.Jo = this.Ko = 0;
			this.canvas.oncontextmenu = function(f) {
				f.preventDefault && f.preventDefault();
				return !1
			};
			this.canvas.onselectstart = function(f) {
				f.preventDefault && f.preventDefault();
				return !1
			};
			this.Qb && (window.c2runtime = this);
			this.ge && (window.ondragover = function(f) {
				f.preventDefault();
				return !1
			}, window.ondrop = function(f) {
				f.preventDefault();
				return !1
			}, require("nw.gui").App.clearCache());
			this.width = f.width;
			this.height = f.height;
			this.W = this.width;
			this.V = this.height;
			this.oi = this.width;
			this.ni = this.height;
			this.Sg = window.innerWidth;
			this.Rg = window.innerHeight;
			this.ha = !0;
			this.Ng = !1;
			Date.now || (Date.now = function() {
				return +new Date
			});
			this.plugins = [];
			this.types = {};
			this.B = [];
			this.Na = [];
			this.xl = {};
			this.Wc = [];
			this.Mk = {};
			this.Bd = [];
			this.ig = [];
			this.Tj = [];
			this.qk = [];
			this.Gq = [];
			this.up = null;
			this.gd = new da;
			this.ll = !1;
			this.Tc = 0;
			this.nl = !1;
			this.Pb = [];
			this.Jd = this.Jb = this.Zi = this.jm = "";
			this.zh = this.sp = !1;
			this.Bk = this.$g = this.be = this.Je = 0;
			this.cg = 1;
			this.rc = new Ta;
			this.Wi = 0;
			this.Ao = !0;
			this.dj = this.Di = this.xi = this.nf = this.Tg = this.Qk = 0;
			this.Fe = null;
			this.ti = [];
			this.Lk = [];
			this.wi = -1;
			this.Cl = [
				[]
			];
			this.zm = this.cj = 0;
			this.vj(null);
			this.Fo = this.eh = 0;
			this.wl = !0;
			this.wg = 0;
			this.Ah = [];
			this.Pj = this.xj = -1;
			this.Jf = !0;
			this.bj = 0;
			this.Mg = !1;
			this.Mt = 0;
			this.ys = !1;
			this.sl = 0;
			this.kd = this.cl = this.$l = !1;
			this.Ml = new da;
			this.Nl = new da;
			this.yj = [];
			this.bd = new Za([]);
			this.tm = new Za([]);
			this.Sd = [];
			this.Ji = {};
			this.xf = {};
			this.uf = {};
			this.hg = {};
			this.ln = {};
			this.uo = this.Yi = this.fc = this.tc = this.to = this.Xi = this.$ = null;
			this.eg = this.ql = !1;
			this.Sk = [null, null];
			this.Ne = 0;
			this.Fn = "";
			this.je = {};
			this.Fj = this.Mf = null;
			this.load();
			this.devicePixelRatio = (this.Se = (!this.lb || this.Gd) && this.Yt && !this.co) ? window.devicePixelRatio || window.webkitDevicePixelRatio ||
				window.mozDevicePixelRatio || window.msDevicePixelRatio || 1 : 1;
			this.yb();
			var m, b = this.rk && !(this.ge || this.io || this.pl || this.Pi);
			0 < this.ac && this.setSize(window.innerWidth, window.innerHeight, !0);
			try {
				this.qr && (this.pc || this.Gd || !this.lb) && (m = {
					alpha: b,
					depth: !1,
					antialias: !1,
					failIfMajorPerformanceCaveat: !0
				}, this.A = f.getContext("webgl", m) || f.getContext("experimental-webgl", m))
			} catch (e) {}
			if (this.A) {
				this.lb || (this.wb = document.createElement("canvas"), jQuery(this.wb).appendTo(this.canvas.parentNode), this.wb.oncontextmenu =
					B(!1), this.wb.onselectstart = B(!1), this.wb.width = this.oi, this.wb.height = this.ni, jQuery(this.wb).css({
						width: this.oi + "px",
						height: this.ni + "px"
					}), this.Zo(), this.Ul = this.wb.getContext("2d"));
				this.C = new hb(this.A, this.fe);
				this.C.Yf(f.width, f.height);
				this.C.zn = 0 !== this.mr;
				this.ra = null;
				this.canvas.addEventListener("webglcontextlost", function(f) {
					f.preventDefault();
					a.Ws();
					console.log("[Construct 2] WebGL context lost");
					window.cr_setSuspended(!0)
				}, !1);
				this.canvas.addEventListener("webglcontextrestored", function() {
					a.C.Yn();
					a.C.Yf(a.C.width, a.C.height, !0);
					a.tc = null;
					a.fc = null;
					a.Sk[0] = null;
					a.Sk[1] = null;
					a.Xs();
					a.ha = !0;
					console.log("[Construct 2] WebGL context restored");
					window.cr_setSuspended(!1)
				}, !1);
				var t, k, c, h, g, d;
				f = 0;
				for (m = this.B.length; f < m; f++)
					for (k = this.B[f], b = 0, t = k.O.length; b < t; b++) h = k.O[b], h.xb = this.C.$k(h.id), this.eg = this.eg || this.C.nh(h.xb);
				f = 0;
				for (m = this.Wc.length; f < m; f++) {
					g = this.Wc[f];
					b = 0;
					for (t = g.O.length; b < t; b++) h = g.O[b], h.xb = this.C.$k(h.id);
					b = 0;
					for (t = g.Z.length; b < t; b++)
						for (d = g.Z[b], k = 0, c = d.O.length; k < c; k++) h =
							d.O[k], h.xb = this.C.$k(h.id), this.eg = this.eg || this.C.nh(h.xb)
				}
			} else {
				if (0 < this.ac && this.Qb) {
					this.canvas = null;
					document.oncontextmenu = B(!1);
					document.onselectstart = B(!1);
					this.ra = AppMobi.canvas.getContext("2d");
					try {
						this.ra.samplingMode = this.ba ? "smooth" : "sharp", this.ra.globalScale = 1, this.ra.HTML5CompatibilityMode = !0, this.ra.imageSmoothingEnabled = this.ba
					} catch (p) {}
					0 !== this.width && 0 !== this.height && (this.ra.width = this.width, this.ra.height = this.height)
				}
				this.ra || (m = this.pc ? {
						antialias: !!this.ba,
						alpha: b
					} : {
						alpha: b
					},
					this.ra = f.getContext("2d", m), this.ra.webkitImageSmoothingEnabled = this.ba, this.ra.mozImageSmoothingEnabled = this.ba, this.ra.msImageSmoothingEnabled = this.ba, this.ra.imageSmoothingEnabled = this.ba);
				this.Ul = this.wb = null
			}
			this.Oj = function() {
				a.fb(!1)
			};
			window == window.top || this.lb || this.io || this.pl || (document.addEventListener("mousedown", function() {
				window.focus()
			}, !0), document.addEventListener("touchstart", function() {
				window.focus()
			}, !0));
			"undefined" !== typeof cr_is_preview && (this.pc && console.log("[Construct 2] In preview-over-wifi via CocoonJS mode"), -1 < window.location.search.indexOf("continuous") && (ea("Reloading for continuous preview"), this.Zi = "__c2_continuouspreview", this.zh = !0), this.dt && !this.fe && (jQuery(window).focus(function() {
				a.setSuspended(!1)
			}), jQuery(window).blur(function() {
				a.setSuspended(!0)
			})));
			0 === this.ac && this.Se && 1 < this.devicePixelRatio && this.setSize(this.ob, this.nb, !0);
			this.Dp();
			this.go();
			this.T = {}
		}
	}

	function g(f) {
		f.target.result.createObjectStore("saves", {
			keyPath: "slot"
		})
	}

	function b(f, a, m, b) {
		var e = indexedDB.open("_C2SaveStates");
		e.onupgradeneeded = g;
		e.onerror = b;
		e.onsuccess = function(e) {
			e = e.target.result;
			e.onerror = b;
			e.transaction(["saves"], "readwrite").objectStore("saves").put({
				slot: f,
				data: a
			}).onsuccess = m
		}
	}

	function c(f, a, m) {
		var b = indexedDB.open("_C2SaveStates");
		b.onupgradeneeded = g;
		b.onerror = m;
		b.onsuccess = function(b) {
			b = b.target.result;
			b.onerror = m;
			var e = b.transaction(["saves"]).objectStore("saves").get(f);
			e.onsuccess = function() {
				e.result ? a(e.result.data) : a(null)
			}
		}
	}

	function a() {
		ea("Reloading for continuous preview");
		window.c2cocoonjs ?
			CocoonJS.App.reload() : -1 < window.location.search.indexOf("continuous") ? window.location.reload(!0) : window.location += "?continuous"
	}

	function e(f) {
		var a, m = {};
		for (a in f) !f.hasOwnProperty(a) || f[a] instanceof da || f[a] && "undefined" !== typeof f[a].ov || (m[a] = f[a]);
		return m
	}
	d.prototype.setSize = function(f, a, m) {
		var b = 0,
			e = 0,
			t = 0,
			k = 0,
			k = 0,
			c = this.Os && this.fo && !navigator.standalone && !this.lb && !this.Uc;
		c && (a += 60);
		if (this.Sg !== f || this.Rg !== a || m) {
			this.Sg = f;
			this.Rg = a;
			var h = this.ac,
				g = (document.mozFullScreen || document.webkitIsFullScreen ||
					!!document.msFullscreenElement || document.fullScreen || this.Mg) && !this.Uc;
			if (g || 0 !== this.ac || m) g && 0 < this.Ne && (h = this.Ne), m = this.devicePixelRatio, 4 <= h ? (t = this.ob / this.nb, f / a > t ? (t *= a, 5 === h ? (k = t * m / this.ob, 1 < k ? k = Math.floor(k) : 1 > k && (k = 1 / Math.ceil(1 / k)), t = this.ob * k / m, k = this.nb * k / m, b = (f - t) / 2, e = (a - k) / 2, f = t, a = k) : (b = (f - t) / 2, f = t)) : (k = f / t, 5 === h ? (k = k * m / this.nb, 1 < k ? k = Math.floor(k) : 1 > k && (k = 1 / Math.ceil(1 / k)), t = this.ob * k / m, k = this.nb * k / m, b = (f - t) / 2, e = (a - k) / 2, f = t) : e = (a - k) / 2, a = k), g && !this.ge && (e = b = 0)) : this.ge && this.Mg &&
				0 === this.Hn && (b = Math.floor((f - this.ob) / 2), e = Math.floor((a - this.nb) / 2), f = this.ob, a = this.nb), 2 > h && (this.ng = m), this.Se && this.lo && 1 < m && (1024 <= f && (f = 1023), 1024 <= a && (a = 1023)), this.oi = Math.round(f), this.ni = Math.round(a), this.width = Math.round(f * m), this.height = Math.round(a * m), this.ha = !0, this.Pp ? (this.W = this.width, this.V = this.height, this.Bc = !0) : this.width < this.ob && this.height < this.nb || 1 === h ? (this.W = this.width, this.V = this.height, this.Bc = !0) : (this.W = this.ob, this.V = this.nb, this.Bc = !1, 2 === h ? (t = this.ob / this.nb,
					h = this.Sg / this.Rg, h < t ? this.W = this.V * h : h > t && (this.V = this.W / h)) : 3 === h && (t = this.ob / this.nb, h = this.Sg / this.Rg, h > t ? this.W = this.V * h : h < t && (this.V = this.W / h))), this.qn && !this.lb && (jQuery(this.qn).css({
					width: Math.round(f) + "px",
					height: Math.round(a) + "px",
					"margin-left": Math.floor(b) + "px",
					"margin-top": Math.floor(e) + "px"
				}), "undefined" !== typeof cr_is_preview && jQuery("#borderwrap").css({
					width: Math.round(f) + "px",
					height: Math.round(a) + "px"
				})), this.canvas && (this.canvas.width = Math.round(f * m), this.canvas.height = Math.round(a *
					m), this.Gd ? (this.canvas.style.left = Math.floor(b) + "px", this.canvas.style.top = Math.floor(e) + "px", this.canvas.style.width = Math.round(f) + "px", this.canvas.style.height = Math.round(a) + "px") : this.Se && !this.lb && jQuery(this.canvas).css({
					width: Math.round(f) + "px",
					height: Math.round(a) + "px"
				})), this.wb && (this.wb.width = Math.round(f), this.wb.height = Math.round(a), jQuery(this.wb).css({
					width: Math.round(f) + "px",
					height: Math.round(a) + "px"
				})), this.C && this.C.Yf(Math.round(f * m), Math.round(a * m)), this.Qb && this.ra && (this.ra.width =
					Math.round(f), this.ra.height = Math.round(a)), this.ra && (this.ra.webkitImageSmoothingEnabled = this.ba, this.ra.mozImageSmoothingEnabled = this.ba, this.ra.msImageSmoothingEnabled = this.ba, this.ra.imageSmoothingEnabled = this.ba), this.Dp(), this.lb || !c && !this.rl || window.setTimeout(function() {
					window.scrollTo(0, 1)
				}, 100)
		}
	};
	d.prototype.Dp = function() {
		if (this.Hq && 0 !== this.Sl) {
			var f = "portrait";
			2 === this.Sl && (f = "landscape");
			screen.lockOrientation ? screen.lockOrientation(f) : screen.webkitLockOrientation ? screen.webkitLockOrientation(f) :
				screen.mozLockOrientation ? screen.mozLockOrientation(f) : screen.msLockOrientation && screen.msLockOrientation(f)
		}
	};
	d.prototype.Ws = function() {
		this.ql = !0;
		var f, a, b;
		f = 0;
		for (a = this.B.length; f < a; f++) b = this.B[f], b.fj && b.fj()
	};
	d.prototype.Xs = function() {
		this.ql = !1;
		var f, a, b;
		f = 0;
		for (a = this.B.length; f < a; f++) b = this.B[f], b.hj && b.hj()
	};
	d.prototype.Zo = function() {
		if (!this.lb) {
			var f = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || document.msFullscreenElement || this.Mg) && !this.Uc ? jQuery(this.canvas).offset() :
				jQuery(this.canvas).position();
			f.position = "absolute";
			jQuery(this.wb).css(f)
		}
	};
	var h = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;
	d.prototype.setSuspended = function(f) {
		var a;
		if (f && !this.Ng)
			for (ea("[Construct 2] Suspending"), this.Ng = !0, -1 !== this.xj && h && h(this.xj), -1 !== this.Pj && clearTimeout(this.Pj), f = 0, a = this.Ah.length; f < a; f++) this.Ah[f](!0);
		else if (!f && this.Ng) {
			ea("[Construct 2] Resuming");
			this.Ng = !1;
			this.Wi = Sa();
			this.Tg = Sa();
			f = this.$g = this.Di = 0;
			for (a = this.Ah.length; f < a; f++) this.Ah[f](!1);
			this.fb(!1)
		}
	};
	d.prototype.Fq = function(f) {
		this.Ah.push(f)
	};
	d.prototype.load = function() {
		var f = jc();
		this.name = f[0];
		this.Gn = f[1];
		this.ac = f[11];
		this.Hn = f[11];
		this.ob = f[9];
		this.nb = f[10];
		this.Wo = this.ob / 2;
		this.Xo = this.nb / 2;
		this.lb && !this.Gd && (4 <= f[11] || 0 === f[11]) && (ea("[Construct 2] Letterbox scale fullscreen modes are not supported on this platform - falling back to 'Scale outer'"), this.Hn = this.ac = 3);
		this.Dm =
			f[17];
		this.Vg = f[18];
		0 === this.Vg && (this.Mf = new Image, this.Mf.src = "loading-logo.png");
		this.eh = f[20];
		this.sd = new Q(this);
		var a, b, e, l, t, k, c, h, g;
		a = 0;
		for (b = f[2].length; a < b; a++) c = f[2][a], ib(c), g = new c[0](this), g.Ej = c[1], g.he = c[2], g.Do = c[9], g.da && g.da(), this.plugins.push(g);
		f = jc();
		a = 0;
		for (b = f[3].length; a < b; a++) {
			c = f[3][a];
			t = c[1];
			g = null;
			e = 0;
			for (l = this.plugins.length; e < l; e++)
				if (this.plugins[e] instanceof t) {
					g = this.plugins[e];
					break
				}
			var d = new g.Fa(g);
			d.name = c[0];
			d.K = c[2];
			d.il = c[3].slice(0);
			d.$t = c[3].length;
			d.Iq =
				c[4];
			d.Vr = c[5];
			d.X = c[11];
			d.K ? (d.Qf = [], d.Cd = this.wg++, d.Ca = null) : (d.Qf = null, d.Cd = -1, d.Ca = []);
			d.Ai = null;
			d.zf = null;
			d.Bn = null;
			d.qc = !1;
			d.Yb = null;
			c[6] ? (d.Lj = c[6][0], d.vm = c[6][1], d.Dh = c[6][2]) : (d.Lj = null, d.vm = 0, d.Dh = 0);
			d.Vb = c[7] ? c[7] : null;
			d.index = a;
			d.i = [];
			d.ri = [];
			d.re = [new jb(d)];
			d.zd = 0;
			d.yc = null;
			d.Xq = 0;
			d.ag = !0;
			d.Vj = kb;
			d.Nn = lb;
			d.cs = mb;
			d.ga = nb;
			d.oh = ob;
			d.uj = pb;
			d.ff = sb;
			d.Ei = tb;
			d.Uk = ub;
			d.Xk = vb;
			d.Rc = wb;
			d.On = xb;
			d.ki = new $a(this.ob, this.nb);
			d.Vh = !0;
			d.Wh = !1;
			d.T = {};
			d.toString = yb;
			d.Na = [];
			e = 0;
			for (l = c[8].length; e < l; e++) {
				h =
					c[8][e];
				var p = h[1],
					s = null;
				t = 0;
				for (k = this.Na.length; t < k; t++)
					if (this.Na[t] instanceof p) {
						s = this.Na[t];
						break
					}
				s || (s = new p(this), s.Kl = [], s.Jl = new da, s.da && s.da(), this.Na.push(s), bc.Lt && s instanceof bc.Lt && (this.up = s)); - 1 === s.Kl.indexOf(d) && s.Kl.push(d);
				t = new s.Fa(s, d);
				t.name = h[0];
				t.X = h[2];
				t.da();
				d.Na.push(t)
			}
			d.global = c[9];
			d.ml = c[10];
			d.O = [];
			e = 0;
			for (l = c[12].length; e < l; e++) d.O.push({
				id: c[12][e][0],
				name: c[12][e][1],
				xb: -1,
				Nb: !0,
				index: e
			});
			d.Cv = c[13];
			this.Dm && !d.K && !d.ml && g.he || d.da();
			d.name && (this.types[d.name] =
				d);
			this.B.push(d);
			g.Ej && (e = new g.ya(d), e.uid = this.eh++, e.cp = this.Fo++, e.Qe = 0, e.Fg = zb, e.toString = Ab, e.D = c[14], e.da(), d.i.push(e), this.je[e.uid.toString()] = e)
		}
		a = 0;
		for (b = f[4].length; a < b; a++)
			for (t = f[4][a], k = this.B[t[0]], e = 1, l = t.length; e < l; e++) c = this.B[t[e]], c.Ca.push(k), k.Qf.push(c);
		a = 0;
		for (b = f[24].length; a < b; a++) {
			t = f[24][a];
			k = [];
			e = 0;
			for (l = t.length; e < l; e++) k.push(this.B[t[e]]);
			e = 0;
			for (l = k.length; e < l; e++) k[e].qc = !0, k[e].Yb = k
		}
		if (0 < this.wg)
			for (a = 0, b = this.B.length; a < b; a++)
				if (c = this.B[a], !c.K && c.Ca.length) {
					c.Ai =
						Array(this.wg);
					c.zf = Array(this.wg);
					c.Bn = Array(this.wg);
					d = [];
					e = s = p = h = 0;
					for (l = c.Ca.length; e < l; e++)
						for (g = c.Ca[e], c.Ai[g.Cd] = h, h += g.$t, c.zf[g.Cd] = p, p += g.Iq, c.Bn[g.Cd] = s, s += g.Vr, t = 0, k = g.O.length; t < k; t++) d.push(ua({}, g.O[t]));
					c.O = d.concat(c.O);
					e = 0;
					for (l = c.O.length; e < l; e++) c.O[e].index = e
				}
		a = 0;
		for (b = f[5].length; a < b; a++) c = f[5][a], e = new Bb(this, c), this.xl[e.name] = e, this.Wc.push(e);
		a = 0;
		for (b = f[6].length; a < b; a++) c = f[6][a], e = new Cb(this, c), this.Mk[e.name] = e, this.Bd.push(e);
		a = 0;
		for (b = this.Bd.length; a < b; a++) this.Bd[a].Ka();
		a = 0;
		for (b = this.Bd.length; a < b; a++) this.Bd[a].Bm();
		a = 0;
		for (b = this.Tj.length; a < b; a++) this.Tj[a].Ka();
		this.Tj.length = 0;
		this.Fn = f[7];
		this.md = f[8];
		this.ng = 1;
		this.qr = f[12];
		this.ba = f[13];
		this.rk = f[14];
		this.Yt = f[16];
		this.Sl = f[19];
		this.Hq = 0 < this.Sl;
		this.dt = f[21];
		this.Bc = this.Pp = f[22];
		this.mr = f[23];
		this.Hj = Date.now()
	};
	var s = !1;
	d.prototype.Hm = function(f) {
		f.onerror = function(a) {
			s = f.Lq = !0;
			console && console.error && console.error("Error loading image '" + f.src + "': ", a)
		};
		this.ig.push(f)
	};
	d.prototype.Tr = function(f) {
		var a,
			b;
		a = 0;
		for (b = this.ig.length; a < b; a++)
			if (this.ig[a].Tq === f) return this.ig[a];
		return null
	};
	d.prototype.kn = function() {
		var f = 0,
			a = 0,
			b = !0,
			e, l, c;
		e = 0;
		for (l = this.ig.length; e < l; e++) {
			c = this.ig[e];
			var k = c.sn;
			if (!k || 0 >= k) k = 5E4;
			f += k;
			!c.complete && !c.loaded || c.Lq ? b = !1 : a += k
		}
		this.la = 0 == f ? 0 : a / f;
		return b
	};
	d.prototype.go = function() {
		if (this.ra || this.C) {
			var f = this.ra || this.Ul;
			this.wb && this.Zo();
			this.la = 0;
			this.so = -1;
			if (this.kn()) this.ws();
			else {
				var a = Date.now() - this.Hj;
				if (f) {
					var b = this.width,
						e = this.height,
						l = this.devicePixelRatio;
					this.wb && (b = this.oi, e = this.ni, l = 1);
					if (3 !== this.Vg && (this.pc || 500 <= a && this.so != this.la)) {
						f.clearRect(0, 0, b, e);
						var a = b / 2,
							e = e / 2,
							b = 0 === this.Vg && this.Mf.complete,
							c = 40 * l,
							k = 0,
							d = 80 * l,
							h;
						b && (d = this.Mf.width * l, h = this.Mf.height * l, c = d / 2, k = h / 2, f.drawImage(this.Mf, pa(a - c), pa(e - k), d, h));
						1 >= this.Vg ? (a = pa(a - c) + 0.5, e = pa(e + (k + (b ? 12 * l : 0))) + 0.5, f.fillStyle = s ? "red" : "DodgerBlue", f.fillRect(a, e, Math.floor(d * this.la), 6 * l), f.strokeStyle = "black", f.strokeRect(a, e, d, 6 * l), f.strokeStyle = "white", f.strokeRect(a - 1 * l, e - 1 * l, d + 2 * l, 8 *
							l)) : 2 === this.Vg && (f.font = this.Gd ? "12pt ArialMT" : "12pt Arial", f.fillStyle = s ? "#f00" : "#999", f.Bv = "middle", l = Math.round(100 * this.la) + "%", b = f.measureText ? f.measureText(l) : null, f.fillText(l, a - (b ? b.width : 0) / 2, e))
					}
					this.so = this.la
				}
				setTimeout(function(f) {
					return function() {
						f.go()
					}
				}(this), this.pc ? 10 : 100)
			}
		}
	};
	d.prototype.ws = function() {
		this.wb && (this.canvas.parentNode.removeChild(this.wb), this.wb = this.Ul = null);
		this.Hj = Date.now();
		this.Tg = Sa();
		var f, a, b;
		if (this.Dm)
			for (f = 0, a = this.B.length; f < a; f++) b = this.B[f], b.K ||
				b.ml || !b.Ea.he || b.da();
		else this.Jf = !1;
		f = 0;
		for (a = this.Wc.length; f < a; f++) this.Wc[f].Uq();
		2 <= this.ac && (f = this.ob / this.nb, a = this.width / this.height, this.ng = 2 !== this.ac && a > f || 2 === this.ac && a < f ? this.height / this.nb : this.width / this.ob);
		this.Gn ? this.xl[this.Gn].qm() : this.Wc[0].qm();
		this.Dm || (this.bj = 1, this.trigger(Q.prototype.p.Pm, null));
		navigator.splashscreen && navigator.splashscreen.hide && navigator.splashscreen.hide();
		f = 0;
		for (a = this.B.length; f < a; f++) b = this.B[f], b.Vs && b.Vs();
		this.fb(!1);
		this.Qb && AppMobi.webview.execute("onGameReady();")
	};
	var r = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
	d.prototype.fb = function(f) {
		if (this.$) {
			var a = Sa();
			if (this.ys && this.$l && 29 > a - this.sl) this.$l = !1, this.sl = a, r ? this.xj = r(this.Oj, this.canvas) : this.Pj = setTimeout(this.Oj, this.fe ? 1 : 16);
			else {
				this.$l = !0;
				this.sl = a;
				var b = this.ac,
					e = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement) && !this.Uc;
				(e || this.Mg) && 0 < this.Ne && (b = this.Ne);
				if (0 < b && (!this.Ti || window.self !== window.top)) {
					var b = window.innerWidth,
						l = window.innerHeight;
					this.Sg === b && this.Rg === l || this.setSize(b, l)
				}
				this.lb || (e ? (this.Ci || (this.Rk = jQuery(this.canvas).css("margin") || "0", this.Ci = !0), this.Lg || this.ge || jQuery(this.canvas).css({
					"margin-left": "" + Math.floor((screen.width - this.width / this.devicePixelRatio) / 2) + "px",
					"margin-top": "" + Math.floor((screen.height - this.height / this.devicePixelRatio) / 2) + "px"
				})) : this.Ci ? (this.Lg || this.ge || jQuery(this.canvas).css("margin",
					this.Rk), this.Rk = "", this.Ci = !1, 0 === this.ac && this.setSize(Math.round(this.Ko / this.devicePixelRatio), Math.round(this.Jo / this.devicePixelRatio), !0)) : (this.Ko = this.width, this.Jo = this.height));
				this.Jf && (e = this.kn(), this.bj = this.la, e && (this.Jf = !1, this.la = 1, this.trigger(Q.prototype.p.Pm, null)));
				this.Ss();
				!this.ha && !this.pc || this.ql || this.zh || f || (this.ha = !1, this.C ? this.Ac() : this.Ad(), this.Fj && (this.canvas && this.canvas.toDataURL && (this.canvas.toDataURL(this.Fj[0], this.Fj[1]), this.trigger(Q.prototype.p.$p,
					null)), this.Fj = null));
				this.vv || (this.nf++, this.xi++, this.Di++);
				this.$g += Sa() - a;
				this.Ng || f || (r ? this.xj = r(this.Oj, this.canvas) : this.Pj = setTimeout(this.Oj, this.fe ? 1 : 16))
			}
		}
	};
	d.prototype.Ss = function() {
		var f, a, b, e, l, c, k, d, h;
		f = Sa();
		1E3 <= f - this.Tg && (this.Tg += 1E3, this.Qk = this.Di, this.Di = 0, this.Bk = this.$g, this.$g = 0);
		this.Ao && (0 !== this.Wi && (a = f - this.Wi, 0 !== a || this.Is ? (this.be = a / 1E3, 0.5 < this.be ? this.be = 0 : 0.1 < this.be && (this.be = 0.1)) : (10 <= this.Dv && (this.Ao = !1), this.be = 1 / 60)), this.Wi = f);
		this.Je = this.be * this.cg;
		this.rc.add(this.Je);
		f = (document.mozFullScreen || document.webkitIsFullScreen || document.fullScreen || !!document.msFullscreenElement || this.Mg) && !this.Uc;
		2 <= this.ac || f && 0 < this.Ne ? (a = this.ob / this.nb, b = this.width / this.height, e = this.ac, f && 0 < this.Ne && (e = this.Ne), this.ng = 2 !== e && b > a || 2 === e && b < a ? this.height / this.nb : this.width / this.ob, this.$ && (this.$.km(this.$.scrollX), this.$.jp(this.$.scrollY))) : this.ng = this.Se ? this.devicePixelRatio : 1;
		this.yb();
		this.Tc++;
		this.sd.yt();
		this.Tc--;
		this.yb();
		this.Tc++;
		f = 0;
		for (a = this.B.length; f <
			a; f++)
			if (k = this.B[f], !k.K && (k.Na.length || k.Ca.length))
				for (b = 0, e = k.i.length; b < e; b++)
					for (d = k.i[b], l = 0, c = d.S.length; l < c; l++) d.S[l].fb();
		f = 0;
		for (a = this.B.length; f < a; f++)
			if (k = this.B[f], !k.K && (k.Na.length || k.Ca.length))
				for (b = 0, e = k.i.length; b < e; b++)
					for (d = k.i[b], l = 0, c = d.S.length; l < c; l++) h = d.S[l], h.ht && h.ht();
		b = this.Ml.fg();
		f = 0;
		for (a = b.length; f < a; f++) b[f].fb();
		this.Tc--;
		this.zs();
		for (f = 0; this.Fe && 10 > f++;) this.yn(this.Fe);
		f = 0;
		for (a = this.Bd.length; f < a; f++) this.Bd[f].el = !1;
		this.$.Le && this.$.Le.Qa();
		this.yj.length =
			0;
		this.wl = !1;
		this.Tc++;
		f = 0;
		for (a = this.B.length; f < a; f++)
			if (k = this.B[f], !k.K && (k.Na.length || k.Ca.length))
				for (b = 0, e = k.i.length; b < e; b++)
					for (d = k.i[b], l = 0, c = d.S.length; l < c; l++) h = d.S[l], h.Eh && h.Eh();
		b = this.Nl.fg();
		f = 0;
		for (a = b.length; f < a; f++) b[f].Eh();
		this.Tc--
	};
	d.prototype.yn = function(f) {
		var a = this.$;
		this.$.Nt();
		var b, e, l, c, k, d, h;
		if (this.C)
			for (b = 0, e = this.B.length; b < e; b++) k = this.B[b], k.K || !k.Uj || k.global && 0 !== k.i.length || -1 !== f.Jg.indexOf(k) || k.Uj();
		a == f && (this.sd.Tb.length = 0);
		f.qm();
		b = 0;
		for (e = this.B.length; b <
			e; b++)
			if (k = this.B[b], k.global || k.Ea.Ej)
				for (f = 0, a = k.i.length; f < a; f++)
					if (d = k.i[f], d.Ql && d.Ql(), d.S)
						for (l = 0, c = d.S.length; l < c; l++) h = d.S[l], h.Ql && h.Ql();
		this.wl = this.ha = !0;
		this.yb()
	};
	d.prototype.wm = function(f) {
		this.Ml.add(f)
	};
	d.prototype.Qt = function(f) {
		this.Nl.add(f)
	};
	d.prototype.Af = function(f) {
		return f && -1 !== f.dh ? this.be * f.dh : this.Je
	};
	d.prototype.Ad = function() {
		this.$.Ad(this.ra);
		this.Qb && this.ra.present()
	};
	d.prototype.Ac = function() {
		this.$.Ac(this.C);
		this.C.it()
	};
	d.prototype.pk = function(f) {
		f && this.ti.push(f)
	};
	d.prototype.qt = function(f) {
		za(this.ti, f)
	};
	d.prototype.Cg = function(f) {
		f = f.toString();
		return this.je.hasOwnProperty(f) ? this.je[f] : null
	};
	d.prototype.Qd = function(f) {
		var a, b;
		if (!this.gd.contains(f)) {
			this.gd.add(f);
			if (f.qc)
				for (a = 0, b = f.siblings.length; a < b; a++) this.Qd(f.siblings[a]);
			this.ll && this.gd.gg.push(f);
			this.Tc++;
			this.trigger(Object.getPrototypeOf(f.type.Ea).p.bq, f);
			this.Tc--
		}
	};
	d.prototype.yb = function() {
		var f, a, b, e, l, c, k, d, h, g;
		this.ll = !0;
		e = 0;
		for (c = this.Pb.length; e < c; e++)
			for (f = this.Pb[e], a = f.type, a.i.push(f),
				l = 0, k = a.Ca.length; l < k; l++) a.Ca[l].i.push(f), a.Ca[l].ag = !0;
		this.Pb.length = 0;
		c = this.gd.fg();
		for (e = 0; e < c.length; e++) {
			f = c[e];
			a = f.type;
			b = a.i;
			l = 0;
			for (k = this.ti.length; l < k; l++) this.ti[l](f);
			za(b, f);
			0 === b.length && (a.Wh = !1);
			f.ji && a.ki.update(f, f.ji, null);
			f.q && (va(f.q.i, f.oc()), f.q.kc = !0);
			l = 0;
			for (k = a.Ca.length; l < k; l++) za(a.Ca[l].i, f), a.Ca[l].ag = !0;
			if (f.S)
				for (l = 0, k = f.S.length; l < k; l++) b = f.S[l], b.df && b.df(), b.Ma.Jl.remove(f);
			this.Ml.remove(f);
			this.Nl.remove(f);
			l = 0;
			for (k = this.sd.Tb.length; l < k; l++)
				if (h = this.sd.Tb[l],
					h.Kb.hasOwnProperty(a.index) && za(h.Kb[a.index].Fd, f), !a.K)
					for (b = 0, d = a.Ca.length; b < d; b++) g = a.Ca[b], h.Kb.hasOwnProperty(g.index) && za(h.Kb[g.index].Fd, f);
			f.df && f.df();
			this.je.hasOwnProperty(f.uid.toString()) && delete this.je[f.uid.toString()];
			this.dj--;
			64 > a.ri.length && a.ri.push(f);
			a.ag = !0
		}
		this.gd.Sc() || (this.ha = !0);
		this.gd.clear();
		this.ll = !1
	};
	d.prototype.tn = function(f, a, b, e) {
		if (f.K) {
			var l = pa(Math.random() * f.Qf.length);
			return this.tn(f.Qf[l], a, b, e)
		}
		return f.yc ? this.ae(f.yc, a, !1, b, e, !1) : null
	};
	var n = [];
	d.prototype.ae = function(f, a, b, e, l, c) {
		var k, d, h, g;
		if (!f) return null;
		var p = this.B[f[1]],
			s = p.Ea.he;
		if (this.Jf && s && !p.ml || s && !this.C && 11 === f[0][11]) return null;
		var v = a;
		s || (a = null);
		var r;
		p.ri.length ? (r = p.ri.pop(), r.uc = !0, p.Ea.ya.call(r, p)) : (r = new p.Ea.ya(p), r.uc = !1);
		r.uid = b && !c ? f[2] : this.eh++;
		this.je[r.uid.toString()] = r;
		r.cp = this.Fo++;
		r.Qe = p.i.length;
		k = 0;
		for (d = this.Pb.length; k < d; ++k) this.Pb[k].type === p && r.Qe++;
		r.Fg = zb;
		h = f[3];
		if (r.uc) Ra(r.T);
		else {
			r.T = {};
			if ("undefined" !== typeof cr_is_preview)
				for (r.ao = [],
					r.ao.length = h.length, k = 0, d = h.length; k < d; k++) r.ao[k] = h[k][1];
			r.Ya = [];
			r.Ya.length = h.length
		}
		k = 0;
		for (d = h.length; k < d; k++) r.Ya[k] = h[k][0];
		if (s) {
			var q = f[0];
			r.x = fa(e) ? q[0] : e;
			r.y = fa(l) ? q[1] : l;
			r.z = q[2];
			r.width = q[3];
			r.height = q[4];
			r.depth = q[5];
			r.n = q[6];
			r.opacity = q[7];
			r.Eb = q[8];
			r.Fb = q[9];
			r.Ob = q[10];
			k = q[11];
			!this.C && p.O.length && (r.Ob = k);
			r.rg = ab(r.Ob);
			this.A && bb(r, r.Ob, this.A);
			if (r.uc) {
				k = 0;
				for (d = q[12].length; k < d; k++)
					for (h = 0, g = q[12][k].length; h < g; h++) r.Ha[k][h] = q[12][k][h];
				r.Ra.set(0, 0, 0, 0);
				r.ji.set(0, 0, -1, -1);
				r.Wb.vh(r.Ra);
				r.vk.length = 0
			} else {
				r.Ha = q[12].slice(0);
				k = 0;
				for (d = r.Ha.length; k < d; k++) r.Ha[k] = q[12][k].slice(0);
				r.fa = [];
				r.Rd = [];
				r.Rd.length = p.O.length;
				r.Ra = new sa(0, 0, 0, 0);
				r.ji = new sa(0, 0, -1, -1);
				r.Wb = new ta;
				r.vk = [];
				r.ea = Db;
				r.nv = Hb;
				r.Zb = Ib;
				r.La = Jb;
				r.Lp = Kb;
				r.oc = Lb
			}
			r.Fh = !1;
			r.Tt = 0;
			r.St = 0;
			r.Rt = null;
			14 === q.length && (r.Fh = !0, r.Tt = q[13][0], r.St = q[13][1], r.Rt = q[13][2]);
			k = 0;
			for (d = p.O.length; k < d; k++) r.Rd[k] = !0;
			r.Pd = Mb;
			r.Pd();
			r.Mp = !!r.fa.length;
			r.uk = !0;
			r.xk = !0;
			p.Vh = !0;
			r.visible = !0;
			r.dh = -1;
			r.q = a;
			r.pf = a.i.length;
			"undefined" === typeof r.ja &&
				(r.ja = null);
			this.ha = r.xd = !0
		}
		r.toString = Ab;
		var u;
		k = n.length = 0;
		for (d = p.Ca.length; k < d; k++) n.push.apply(n, p.Ca[k].Na);
		n.push.apply(n, p.Na);
		if (r.uc)
			for (k = 0, d = n.length; k < d; k++) {
				var L = n[k];
				u = r.S[k];
				u.uc = !0;
				L.Ma.ya.call(u, L, r);
				q = f[4][k];
				h = 0;
				for (g = q.length; h < g; h++) u.D[h] = q[h];
				u.da();
				L.Ma.Jl.add(r)
			} else
				for (r.S = [], k = 0, d = n.length; k < d; k++) L = n[k], u = new L.Ma.ya(L, r), u.uc = !1, u.D = f[4][k].slice(0), u.da(), r.S.push(u), L.Ma.Jl.add(r);
		q = f[5];
		if (r.uc)
			for (k = 0, d = q.length; k < d; k++) r.D[k] = q[k];
		else r.D = q.slice(0);
		this.Pb.push(r);
		a && (a.i.push(r), 1 !== a.Gc || 1 !== a.Hc) && (p.Wh = !0);
		this.dj++;
		if (p.qc) {
			if (r.qc = !0, r.uc ? r.siblings.length = 0 : r.siblings = [], !b && !c) {
				k = 0;
				for (d = p.Yb.length; k < d; k++)
					if (p.Yb[k] !== p) {
						if (!p.Yb[k].yc) return null;
						r.siblings.push(this.ae(p.Yb[k].yc, v, !1, s ? r.x : e, s ? r.y : l, !0))
					}
				k = 0;
				for (d = r.siblings.length; k < d; k++)
					for (r.siblings[k].siblings.push(r), h = 0; h < d; h++) k !== h && r.siblings[k].siblings.push(r.siblings[h])
			}
		} else r.qc = !1, r.siblings = null;
		r.da();
		k = 0;
		for (d = r.S.length; k < d; k++) r.S[k].gt && r.S[k].gt();
		return r
	};
	d.prototype.Yk =
		function(a) {
			var b, e;
			b = 0;
			for (e = this.$.Z.length; b < e; b++) {
				var c = this.$.Z[b];
				if (gb(c.name, a)) return c
			}
			return null
		};
	d.prototype.Bg = function(a) {
		a = pa(a);
		0 > a && (a = 0);
		a >= this.$.Z.length && (a = this.$.Z.length - 1);
		return this.$.Z[a]
	};
	d.prototype.zk = function(a) {
		var b, e;
		b = 0;
		for (e = a.length; b < e; b++) a[b].ga().qa = !0
	};
	d.prototype.oh = function(a) {
		var b, e;
		b = 0;
		for (e = a.length; b < e; b++) a[b].oh()
	};
	d.prototype.uj = function(a) {
		var b, e;
		b = 0;
		for (e = a.length; b < e; b++) a[b].uj()
	};
	d.prototype.ff = function(a) {
		var b, e;
		b = 0;
		for (e = a.length; b < e; b++) a[b].ff()
	};
	d.prototype.Jp = function(a) {
		if (a.Vh) {
			var b, e, c = a.i;
			b = 0;
			for (e = c.length; b < e; ++b) c[b].Lp();
			c = this.Pb;
			b = 0;
			for (e = c.length; b < e; ++b) c[b].type === a && c[b].Lp();
			a.Vh = !1
		}
	};
	d.prototype.Kn = function(a, b, e, c) {
		var l, d, k = a ? 1 !== a.Gc || 1 !== a.Hc : !1;
		if (b.K)
			for (a = 0, l = b.Qf.length; a < l; ++a) d = b.Qf[a], k || d.Wh ? xa(c, d.i) : (this.Jp(d), d.ki.dp(e, c));
		else k || b.Wh ? xa(c, b.i) : (this.Jp(b), b.ki.dp(e, c))
	};
	d.prototype.js = function(a, b, e, c) {
		var l, d;
		l = 0;
		for (d = b.length; l < d; ++l) this.Kn(a, b[l], e, c)
	};
	d.prototype.hs = function(a, b, e) {
		var c = this.up;
		c && this.js(a, c.Kl, b, e)
	};
	d.prototype.Pt = function(a, b, e) {
		var c = a.ga(),
			l, d, k, h, g, p;
		if (c.qa)
			for (c.qa = !1, l = c.i.length = 0, h = a.i.length; l < h; l++) k = a.i[l], k.La(), g = k.q.Xb(b, e, !0), p = k.q.Xb(b, e, !1), k.Zb(g, p) && c.i.push(k);
		else {
			l = d = 0;
			for (h = c.i.length; l < h; l++) k = c.i[l], k.La(), g = k.q.Xb(b, e, !0), p = k.q.Xb(b, e, !1), k.Zb(g, p) && (c.i[d] = c.i[l], d++);
			c.i.length = d
		}
		a.Rc();
		return c.dl()
	};
	d.prototype.kf = function(a, b) {
		if (!(a && b && a !== b && a.xd && b.xd)) return !1;
		a.La();
		b.La();
		var e = a.q,
			c = b.q,
			l, d, k, h, g, p, s, r;
		if (e === c || e.Gc === c.Gc && c.Hc ===
			c.Hc && e.scale === c.scale && e.n === c.n && e.dd === c.dd) {
			if (!a.Ra.Es(b.Ra) || !a.Wb.bo(b.Wb) || a.Fh && b.Fh) return !1;
			if (a.Fh) return this.yp(a, b);
			if (b.Fh) return this.yp(b, a);
			s = a.ja && !a.ja.Gf();
			l = b.ja && !b.ja.Gf();
			if (!s && !l) return !0;
			s ? (a.ja.vf(a.width, a.height, a.n), s = a.ja) : (this.bd.Zf(a.Wb, a.x, a.y, a.width, a.height), s = this.bd);
			l ? (b.ja.vf(b.width, b.height, b.n), r = b.ja) : (this.bd.Zf(b.Wb, b.x, b.y, b.width, b.height), r = this.bd);
			return s.Kg(r, b.x - a.x, b.y - a.y)
		}
		s = a.ja && !a.ja.Gf();
		l = b.ja && !b.ja.Gf();
		s ? (a.ja.vf(a.width, a.height,
			a.n), this.bd.np(a.ja)) : this.bd.Zf(a.Wb, a.x, a.y, a.width, a.height);
		s = this.bd;
		l ? (b.ja.vf(b.width, b.height, b.n), this.tm.np(b.ja)) : this.tm.Zf(b.Wb, b.x, b.y, b.width, b.height);
		r = this.tm;
		l = 0;
		for (d = s.Zc; l < d; l++) k = 2 * l, h = k + 1, g = s.ab[k], p = s.ab[h], s.ab[k] = e.Hb(g + a.x, p + a.y, !0), s.ab[h] = e.Hb(g + a.x, p + a.y, !1);
		s.La();
		l = 0;
		for (d = r.Zc; l < d; l++) k = 2 * l, h = k + 1, g = r.ab[k], p = r.ab[h], r.ab[k] = c.Hb(g + b.x, p + b.y, !0), r.ab[h] = c.Hb(g + b.x, p + b.y, !1);
		r.La();
		return s.Kg(r, 0, 0)
	};
	var q = new ta;
	new sa(0, 0, 0, 0);
	var p = [];
	d.prototype.yp = function(a,
		b) {
		var e, c, l, d, k = b.Ra,
			h = a.x,
			g = a.y;
		a.rv(k, p);
		var s = b.ja && !b.ja.Gf();
		e = 0;
		for (c = p.length; e < c; ++e)
			if (l = p[e], d = l.xv, k.Fs(d, h, g) && (q.vh(d), q.offset(h, g), q.bo(b.Wb)))
				if (s)
					if (b.ja.vf(b.width, b.height, b.n), l.Yl) {
						if (l.Yl.Kg(b.ja, b.x - (h + d.left), b.y - (g + d.top))) return p.length = 0, !0
					} else {
						if (this.bd.Zf(q, 0, 0, d.right - d.left, d.bottom - d.top), this.bd.Kg(b.ja, b.x, b.y)) return p.length = 0, !0
					} else if (l.Yl) {
			if (this.bd.Zf(b.Wb, 0, 0, b.width, b.height), l.Yl.Kg(this.bd, -(h + d.left), -(g + d.top))) return p.length = 0, !0
		} else return p.length =
			0, !0;
		p.length = 0;
		return !1
	};
	d.prototype.Ep = function(a, b) {
		if (!b) return !1;
		var e, c, l, d, k;
		e = 0;
		for (c = a.Na.length; e < c; e++)
			if (a.Na[e].Ma instanceof b) return !0;
		if (!a.K)
			for (e = 0, c = a.Ca.length; e < c; e++)
				for (k = a.Ca[e], l = 0, d = k.Na.length; l < d; l++)
					if (k.Na[l].Ma instanceof b) return !0;
		return !1
	};
	d.prototype.Fp = function(a) {
		return this.Ep(a, bc.Eu)
	};
	d.prototype.Am = function(a) {
		return this.Ep(a, bc.Fu)
	};
	var v = [];
	d.prototype.lf = function(a) {
		var b, e, c;
		a.La();
		this.hs(a.q, a.Ra, v);
		b = 0;
		for (e = v.length; b < e; ++b)
			if (c = v[b], c.T.Av && this.kf(a,
					c)) return v.length = 0, c;
		v.length = 0;
		return null
	};
	d.prototype.mt = function(a, b, e, c) {
		c = c || 50;
		var l = a.x,
			d = a.y,
			k, h = null,
			g = null;
		for (k = 0; k < c; k++)
			if (a.x = l + b * k, a.y = d + e * k, a.ea(), !this.kf(a, h) && ((h = this.lf(a)) && (g = h), !h && !h)) return g && this.kt(a, b, e, g), !0;
		a.x = l;
		a.y = d;
		a.ea();
		return !1
	};
	d.prototype.kt = function(a, b, e, c) {
		var l = 2,
			d, k = !1;
		d = !1;
		for (var h = a.x, g = a.y; 16 >= l;) d = 1 / l, l *= 2, a.x += b * d * (k ? 1 : -1), a.y += e * d * (k ? 1 : -1), a.ea(), this.kf(a, c) ? d = k = !0 : (d = k = !1, h = a.x, g = a.y);
		d && (a.x = h, a.y = g, a.ea())
	};
	d.prototype.nt = function(a) {
		var b =
			0,
			e = a.x,
			c = a.y,
			l = 0,
			d = 0,
			k = 0,
			h = this.lf(a);
		if (h) {
			for (; 100 >= b;) {
				switch (l) {
					case 0:
						d = 0;
						k = -1;
						b++;
						break;
					case 1:
						d = 1;
						k = -1;
						break;
					case 2:
						d = 1;
						k = 0;
						break;
					case 3:
						k = d = 1;
						break;
					case 4:
						d = 0;
						k = 1;
						break;
					case 5:
						d = -1;
						k = 1;
						break;
					case 6:
						d = -1;
						k = 0;
						break;
					case 7:
						k = d = -1
				}
				l = (l + 1) % 8;
				a.x = pa(e + d * b);
				a.y = pa(c + k * b);
				a.ea();
				if (!this.kf(a, h) && (h = this.lf(a), !h)) return
			}
			a.x = e;
			a.y = c;
			a.ea()
		}
	};
	d.prototype.pt = function(a, b) {
		a.xd && b.xd && this.yj.push([a, b])
	};
	d.prototype.Sq = function(a, b) {
		var e, c, l;
		e = 0;
		for (c = this.yj.length; e < c; e++)
			if (l = this.yj[e], l[0] ==
				a && l[1] == b || l[0] == b && l[1] == a) return !0;
		return !1
	};
	d.prototype.Nq = function(a, b, e) {
		var c = a.x,
			l = a.y,
			d = la(10, Oa(b, e, c, l)),
			k = Fa(b, e, c, l),
			h = this.lf(a);
		if (!h) return Ca(k + na);
		var g = h,
			p, s, r, n, v = E(5);
		for (p = 1; 36 > p; p++)
			if (s = k - p * v, a.x = b + Math.cos(s) * d, a.y = e + Math.sin(s) * d, a.ea(), !this.kf(a, g) && (g = this.lf(a), !g)) {
				r = s;
				break
			}
		36 === p && (r = Ca(k + na));
		g = h;
		for (p = 1; 36 > p; p++)
			if (s = k + p * v, a.x = b + Math.cos(s) * d, a.y = e + Math.sin(s) * d, a.ea(), !this.kf(a, g) && (g = this.lf(a), !g)) {
				n = s;
				break
			}
		36 === p && (n = Ca(k + na));
		a.x = c;
		a.y = l;
		a.ea();
		if (n === r) return n;
		a = Ha(n, r) / 2;
		a = Ja(n, r) ? Ca(r + a + na) : Ca(n + a);
		r = Math.cos(k);
		k = Math.sin(k);
		n = Math.cos(a);
		a = Math.sin(a);
		b = r * n + k * a;
		return Fa(0, 0, r - 2 * b * n, k - 2 * b * a)
	};
	var u = -1;
	d.prototype.trigger = function(a, b, e) {
		if (!this.$) return !1;
		var c = this.$.Le;
		if (!c) return !1;
		var l = !1,
			d, k, h;
		u++;
		var g = c.Hk;
		k = 0;
		for (h = g.length; k < h; ++k) d = this.Bp(a, b, g[k], e), l = l || d;
		d = this.Bp(a, b, c, e);
		u--;
		return l || d
	};
	d.prototype.Bp = function(a, b, e, c) {
		var l = !1,
			d, k, h, g;
		if (b)
			for (h = this.ym(a, b, b.type.name, e, c), l = l || h, g = b.type.Ca, d = 0, k = g.length; d < k; ++d) h = this.ym(a,
				b, g[d].name, e, c), l = l || h;
		else h = this.ym(a, b, "system", e, c), l = l || h;
		return l
	};
	d.prototype.ym = function(a, b, e, c, l) {
		var d, k = !1,
			h = !1,
			h = "undefined" !== typeof l,
			g = (h ? c.Dn : c.Cp)[e];
		if (!g) return k;
		var p = null;
		c = 0;
		for (d = g.length; c < d; ++c)
			if (g[c].method == a) {
				p = g[c].ug;
				break
			}
		if (!p) return k;
		a = h ? p[l] : p;
		if (!a) return null;
		c = 0;
		for (d = a.length; c < d; c++) l = a[c][0], h = a[c][1], h = this.Rr(b, e, l, h), k = k || h;
		return k
	};
	d.prototype.Rr = function(a, b, e, c) {
		var l, d, k = !1;
		this.zm++;
		var h = this.Ab().$b;
		h && this.oh(h.pe);
		var g = 1 < this.zm;
		this.oh(e.pe);
		g && this.lt();
		var p = this.vj(e);
		p.$b = e;
		a && (l = this.types[b].ga(), l.qa = !1, l.i.length = 1, l.i[0] = a, this.types[b].Rc());
		a = !0;
		if (e.parent) {
			b = p.xp;
			for (l = e.parent; l;) b.push(l), l = l.parent;
			b.reverse();
			l = 0;
			for (d = b.length; l < d; l++)
				if (!b[l].At()) {
					a = !1;
					break
				}
		}
		a && (this.xi++, e.Xc ? e.zt(c) : e.Qa(), k = k || p.Ve);
		this.pj();
		g && this.ft();
		this.ff(e.pe);
		h && this.ff(h.pe);
		0 !== this.Tc || 0 !== u || this.nl || this.gd.Sc() && !this.Pb.length || this.yb();
		this.zm--;
		return k
	};
	d.prototype.Fi = function() {
		var a = this.Ab();
		return a.$b.ib[a.Wa]
	};
	d.prototype.lt =
		function() {
			this.cj++;
			this.cj >= this.Cl.length && this.Cl.push([])
		};
	d.prototype.ft = function() {
		this.cj--
	};
	d.prototype.Ln = function() {
		return this.Cl[this.cj]
	};
	d.prototype.vj = function(a) {
		this.wi++;
		this.wi >= this.Lk.length && this.Lk.push(new Nb);
		var b = this.Ab();
		b.reset(a);
		return b
	};
	d.prototype.pj = function() {
		this.wi--
	};
	d.prototype.Ab = function() {
		return this.Lk[this.wi]
	};
	d.prototype.Mn = function(a, b) {
		for (var e, c, l, d, k, h; b;) {
			e = 0;
			for (c = b.Lc.length; e < c; e++)
				if (h = b.Lc[e], h instanceof Ob && gb(a, h.name)) return h;
			b = b.parent
		}
		e =
			0;
		for (c = this.Bd.length; e < c; e++)
			for (k = this.Bd[e], l = 0, d = k.de.length; l < d; l++)
				if (h = k.de[l], h instanceof Ob && gb(a, h.name)) return h;
		return null
	};
	d.prototype.Pn = function(a) {
		var b, e;
		b = 0;
		for (e = this.Wc.length; b < e; b++)
			if (this.Wc[b].X === a) return this.Wc[b];
		return null
	};
	d.prototype.Ii = function(a) {
		var b, e;
		b = 0;
		for (e = this.B.length; b < e; b++)
			if (this.B[b].X === a) return this.B[b];
		return null
	};
	d.prototype.Zr = function(a) {
		var b, e;
		b = 0;
		for (e = this.Sd.length; b < e; b++)
			if (this.Sd[b].X === a) return this.Sd[b];
		return null
	};
	d.prototype.zs =
		function() {
			var e = this,
				d = this.jm,
				m = this.Jd,
				h = this.Zi,
				l = !1;
			this.sp && (l = !0, d = "__c2_continuouspreview", this.sp = !1);
			if (d.length) {
				this.yb();
				m = this.Et();
				if (window.indexedDB && !this.pc) b(d, m, function() {
					ea("Saved state to IndexedDB storage (" + m.length + " bytes)");
					e.Jd = m;
					e.trigger(Q.prototype.p.fk, null);
					e.Jd = "";
					l && a()
				}, function(b) {
					try {
						localStorage.setItem("__c2save_" + d, m), ea("Saved state to WebStorage (" + m.length + " bytes)"), e.Jd = m, e.trigger(Q.prototype.p.fk, null), e.Jd = "", l && a()
					} catch (c) {
						ea("Failed to save game state: " +
							b + "; " + c)
					}
				});
				else try {
					localStorage.setItem("__c2save_" + d, m), ea("Saved state to WebStorage (" + m.length + " bytes)"), e.Jd = m, this.trigger(Q.prototype.p.fk, null), e.Jd = "", l && a()
				} catch (g) {
					ea("Error saving to WebStorage: " + g)
				}
				this.Jb = this.Zi = this.jm = ""
			}
			h.length && (window.indexedDB && !this.pc ? c(h, function(a) {
				a ? (e.Jb = a, ea("Loaded state from IndexedDB storage (" + e.Jb.length + " bytes)")) : (e.Jb = localStorage.getItem("__c2save_" + h) || "", ea("Loaded state from WebStorage (" + e.Jb.length + " bytes)"));
				e.zh = !1;
				e.Jb.length ||
					e.trigger(Q.prototype.p.ek, null)
			}, function() {
				e.Jb = localStorage.getItem("__c2save_" + h) || "";
				ea("Loaded state from WebStorage (" + e.Jb.length + " bytes)");
				e.zh = !1;
				e.Jb.length || e.trigger(Q.prototype.p.ek, null)
			}) : (this.Jb = localStorage.getItem("__c2save_" + h) || "", ea("Loaded state from WebStorage (" + this.Jb.length + " bytes)"), this.zh = !1, e.Jb.length || e.trigger(Q.prototype.p.ek, null)), this.jm = this.Zi = "");
			this.Jb.length && (this.yb(), this.Rs(this.Jb), this.Jd = this.Jb, this.trigger(Q.prototype.p.hq, null), this.Jb = this.Jd =
				"")
		};
	d.prototype.Et = function() {
		var a, b, c, d, l, h, k, g = {
			c2save: !0,
			version: 1,
			rt: {
				time: this.rc.aa,
				timescale: this.cg,
				tickcount: this.nf,
				execcount: this.xi,
				next_uid: this.eh,
				running_layout: this.$.X,
				start_time_offset: Date.now() - this.Hj
			},
			types: {},
			layouts: {},
			events: {
				groups: {},
				cnds: {},
				acts: {},
				vars: {}
			}
		};
		a = 0;
		for (b = this.B.length; a < b; a++)
			if (l = this.B[a], !l.K && !this.Fp(l)) {
				h = {
					instances: []
				};
				Qa(l.T) && (h.ex = e(l.T));
				c = 0;
				for (d = l.i.length; c < d; c++) h.instances.push(this.im(l.i[c]));
				g.types[l.X.toString()] = h
			}
		a = 0;
		for (b = this.Wc.length; a <
			b; a++) c = this.Wc[a], g.layouts[c.X.toString()] = c.Bb();
		d = g.events.groups;
		a = 0;
		for (b = this.Sd.length; a < b; a++) c = this.Sd[a], d[c.X.toString()] = this.Ji[c.Gg].Cf;
		b = g.events.cnds;
		for (k in this.xf) this.xf.hasOwnProperty(k) && (a = this.xf[k], Qa(a.T) && (b[k] = {
			ex: e(a.T)
		}));
		b = g.events.acts;
		for (k in this.uf) this.uf.hasOwnProperty(k) && (a = this.uf[k], Qa(a.T) && (b[k] = {
			ex: a.T
		}));
		b = g.events.vars;
		for (k in this.hg) this.hg.hasOwnProperty(k) && (a = this.hg[k], a.Qi || a.parent && !a.Pg || (b[k] = a.data));
		g.system = this.sd.Bb();
		return JSON.stringify(g)
	};
	d.prototype.fp = function() {
		var a, b, e, c, d, h;
		this.je = {};
		a = 0;
		for (b = this.B.length; a < b; a++)
			if (e = this.B[a], !e.K)
				for (c = 0, d = e.i.length; c < d; c++) h = e.i[c], this.je[h.uid.toString()] = h
	};
	d.prototype.Rs = function(a) {
		a = JSON.parse(a);
		if (a.c2save && !(1 < a.version)) {
			var b = a.rt;
			this.rc.reset();
			this.rc.aa = b.time;
			this.cg = b.timescale;
			this.nf = b.tickcount;
			this.Hj = Date.now() - b.start_time_offset;
			var e = b.running_layout;
			if (e !== this.$.X)
				if (e = this.Pn(e)) this.yn(e);
				else return;
			var c, d, h, k, g, p, s;
			p = a.types;
			for (d in p)
				if (p.hasOwnProperty(d) &&
					(k = this.Ii(parseInt(d, 10))) && !k.K && !this.Fp(k)) {
					p[d].ex ? k.T = p[d].ex : Ra(k.T);
					g = k.i;
					h = p[d].instances;
					e = 0;
					for (c = ma(g.length, h.length); e < c; e++) this.$i(g[e], h[e]);
					e = h.length;
					for (c = g.length; e < c; e++) this.Qd(g[e]);
					e = g.length;
					for (c = h.length; e < c; e++) {
						g = null;
						if (k.Ea.he && (g = this.$.Hi(h[e].w.l), !g)) continue;
						g = this.ae(k.yc, g, !1, 0, 0, !0);
						this.$i(g, h[e])
					}
					k.ag = !0
				}
			this.yb();
			this.fp();
			c = a.layouts;
			for (d in c) c.hasOwnProperty(d) && (e = this.Pn(parseInt(d, 10))) && e.Rb(c[d]);
			c = a.events.groups;
			for (d in c) c.hasOwnProperty(d) &&
				(e = this.Zr(parseInt(d, 10))) && this.Ji[e.Gg] && (this.Ji[e.Gg].Cf = c[d]);
			e = a.events.cnds;
			for (d in e) e.hasOwnProperty(d) && this.xf.hasOwnProperty(d) && (this.xf[d].T = e[d].ex);
			e = a.events.acts;
			for (d in e) e.hasOwnProperty(d) && this.uf.hasOwnProperty(d) && (this.uf[d].T = e[d].ex);
			e = a.events.vars;
			for (d in e) e.hasOwnProperty(d) && this.hg.hasOwnProperty(d) && (this.hg[d].data = e[d]);
			this.eh = b.next_uid;
			this.sd.Rb(a.system);
			e = 0;
			for (c = this.B.length; e < c; e++)
				if (k = this.B[e], !k.K)
					for (d = 0, a = k.i.length; d < a; d++) {
						g = k.i[d];
						if (k.qc)
							for (p =
								g.Fg(), b = g.siblings.length = 0, h = k.Yb.length; b < h; b++) s = k.Yb[b], k !== s && g.siblings.push(s.i[p]);
						g.ed && g.ed();
						if (g.S)
							for (b = 0, h = g.S.length; b < h; b++) p = g.S[b], p.ed && p.ed()
					}
				this.ha = !0
		}
	};
	d.prototype.im = function(a, b) {
		var c, d, h, g, k;
		g = a.type;
		h = g.Ea;
		var p = {};
		b ? p.c2 = !0 : p.uid = a.uid;
		Qa(a.T) && (p.ex = e(a.T));
		if (a.Ya && a.Ya.length)
			for (p.ivs = {}, c = 0, d = a.Ya.length; c < d; c++) p.ivs[a.type.il[c].toString()] = a.Ya[c];
		if (h.he) {
			h = {
				x: a.x,
				y: a.y,
				w: a.width,
				h: a.height,
				l: a.q.X,
				zi: a.oc()
			};
			0 !== a.n && (h.a = a.n);
			1 !== a.opacity && (h.o = a.opacity);
			0.5 !== a.Eb && (h.hX = a.Eb);
			0.5 !== a.Fb && (h.hY = a.Fb);
			0 !== a.Ob && (h.bm = a.Ob);
			a.visible || (h.v = a.visible);
			a.xd || (h.ce = a.xd); - 1 !== a.dh && (h.mts = a.dh);
			if (g.O.length)
				for (h.fx = [], c = 0, d = g.O.length; c < d; c++) k = g.O[c], h.fx.push({
					name: k.name,
					active: a.Rd[k.index],
					params: a.Ha[k.index]
				});
			p.w = h
		}
		if (a.S && a.S.length)
			for (p.behs = {}, c = 0, d = a.S.length; c < d; c++) g = a.S[c], g.Bb && (p.behs[g.type.X.toString()] = g.Bb());
		a.Bb && (p.data = a.Bb());
		return p
	};
	d.prototype.as = function(a, b) {
		var e, c;
		e = 0;
		for (c = a.il.length; e < c; e++)
			if (a.il[e] === b) return e;
		return -1
	};
	d.prototype.Yr = function(a, b) {
		var e, c;
		e = 0;
		for (c = a.S.length; e < c; e++)
			if (a.S[e].type.X === b) return e;
		return -1
	};
	d.prototype.$i = function(a, b, e) {
		var c, d, h, k, g;
		g = a.type;
		h = g.Ea;
		if (e) {
			if (!b.c2) return
		} else a.uid = b.uid;
		b.ex ? a.T = b.ex : Ra(a.T);
		if (d = b.ivs)
			for (c in d) d.hasOwnProperty(c) && (e = this.as(g, parseInt(c, 10)), 0 > e || e >= a.Ya.length || (a.Ya[e] = d[c]));
		if (h.he) {
			h = b.w;
			a.q.X !== h.l && (e = a.q, a.q = this.$.Hi(h.l), a.q ? (a.q.i.push(a), a.q.kc = !0, za(e.i, a), e.kc = !0) : (a.q = e, this.Qd(a)));
			a.x = h.x;
			a.y = h.y;
			a.width = h.w;
			a.height =
				h.h;
			a.pf = h.zi;
			a.n = h.hasOwnProperty("a") ? h.a : 0;
			a.opacity = h.hasOwnProperty("o") ? h.o : 1;
			a.Eb = h.hasOwnProperty("hX") ? h.hX : 0.5;
			a.Fb = h.hasOwnProperty("hY") ? h.hY : 0.5;
			a.visible = h.hasOwnProperty("v") ? h.v : !0;
			a.xd = h.hasOwnProperty("ce") ? h.ce : !0;
			a.dh = h.hasOwnProperty("mts") ? h.mts : -1;
			a.Ob = h.hasOwnProperty("bm") ? h.bm : 0;
			a.rg = ab(a.Ob);
			this.A && bb(a, a.Ob, this.A);
			a.ea();
			if (h.hasOwnProperty("fx"))
				for (e = 0, d = h.fx.length; e < d; e++) k = g.Xk(h.fx[e].name), 0 > k || (a.Rd[k] = h.fx[e].active, a.Ha[k] = h.fx[e].params);
			a.Pd()
		}
		if (g = b.behs)
			for (c in g) g.hasOwnProperty(c) &&
				(h = this.Yr(a, parseInt(c, 10)), 0 > h || a.S[h].Rb(g[c]));
		b.data && a.Rb(b.data)
	};
	Pb = function(a) {
		return new d(document.getElementById(a))
	};
	Qb = function(a, b) {
		return new d({
			dc: !0,
			width: a,
			height: b
		})
	};
	window.cr_createRuntime = Pb;
	window.cr_createDCRuntime = Qb;
	window.createCocoonJSRuntime = function() {
		window.c2cocoonjs = !0;
		var a = document.createElement("screencanvas") || document.createElement("canvas");
		a.zv = !0;
		document.body.appendChild(a);
		a = new d(a);
		window.c2runtime = a;
		window.addEventListener("orientationchange", function() {
			window.c2runtime.setSize(window.innerWidth,
				window.innerHeight)
		});
		window.c2runtime.setSize(window.innerWidth, window.innerHeight);
		return a
	};
	window.createEjectaRuntime = function() {
		var a = new d(document.getElementById("canvas"));
		window.c2runtime = a;
		window.c2runtime.setSize(window.innerWidth, window.innerHeight);
		return a
	}
})();
window.cr_getC2Runtime = function() {
	var d = document.getElementById("c2canvas");
	return d ? d.c2runtime : window.c2runtime ? window.c2runtime : null
};
window.cr_sizeCanvas = function(d, g) {
	if (0 !== d && 0 !== g) {
		var b = window.cr_getC2Runtime();
		b && b.setSize(d, g)
	}
};
window.cr_setSuspended = function(d) {
	var g = window.cr_getC2Runtime();
	g && g.setSuspended(d)
};
(function() {
	function d(a, b) {
		this.b = a;
		this.Le = null;
		this.scrollX = this.b.ob / 2;
		this.scrollY = this.b.nb / 2;
		this.scale = 1;
		this.n = 0;
		this.yg = !0;
		this.name = b[0];
		this.width = b[1];
		this.height = b[2];
		this.Gp = b[3];
		this.qp = b[4];
		this.X = b[5];
		var c = b[6],
			d, g;
		this.Z = [];
		this.Jg = [];
		d = 0;
		for (g = c.length; d < g; d++) {
			var n = new Rb(this, c[d]);
			n.Ho = d;
			this.Z.push(n)
		}
		c = b[7];
		this.Re = [];
		d = 0;
		for (g = c.length; d < g; d++) {
			var n = c[d],
				q = this.b.B[n[1]];
			q.yc || (q.yc = n);
			this.Re.push(n); - 1 === this.Jg.indexOf(q) && this.Jg.push(q)
		}
		this.O = [];
		this.fa = [];
		this.Ha =
			[];
		d = 0;
		for (g = b[8].length; d < g; d++) this.O.push({
			id: b[8][d][0],
			name: b[8][d][1],
			xb: -1,
			Nb: !0,
			index: d
		}), this.Ha.push(b[8][d][2].slice(0));
		this.Pd();
		this.ph = new sa(0, 0, 1, 1);
		this.am = new sa(0, 0, 1, 1);
		this.le = {}
	}

	function g(a, b) {
		this.wa = a;
		this.b = a.b;
		this.i = [];
		this.scale = 1;
		this.n = 0;
		this.Ie = !1;
		this.Od = new sa(0, 0, 0, 0);
		this.Ap = new ta;
		this.Nc = this.Mb = this.Oc = this.Lb = 0;
		this.kc = !1;
		this.name = b[0];
		this.index = b[1];
		this.X = b[2];
		this.visible = b[3];
		this.Ud = b[4];
		this.of = b[5];
		this.Gc = b[6];
		this.Hc = b[7];
		this.opacity = b[8];
		this.Pk =
			b[9];
		this.dd = b[10];
		this.Ob = b[11];
		this.pr = b[12];
		this.rg = "source-over";
		this.zb = this.Cb = 0;
		this.me = !1;
		var c = b[13],
			d, g;
		this.Df = [];
		d = 0;
		for (g = c.length; d < g; d++) {
			var n = c[d],
				q = this.b.B[n[1]];
			q.yc || (q.yc = n, q.Xq = this.index);
			this.Df.push(n); - 1 === this.wa.Jg.indexOf(q) && this.wa.Jg.push(q)
		}
		this.O = [];
		this.fa = [];
		this.Ha = [];
		d = 0;
		for (g = b[14].length; d < g; d++) this.O.push({
			id: b[14][d][0],
			name: b[14][d][1],
			xb: -1,
			Nb: !0,
			index: d
		}), this.Ha.push(b[14][d][2].slice(0));
		this.Pd();
		this.ph = new sa(0, 0, 1, 1);
		this.am = new sa(0, 0, 1, 1)
	}

	function b(a,
		b) {
		return a.pf - b.pf
	}
	d.prototype.Dt = function(a) {
		var b = a.type.X.toString();
		this.le.hasOwnProperty(b) || (this.le[b] = []);
		this.le[b].push(this.b.im(a))
	};
	d.prototype.Un = function() {
		var a = this.Z[0];
		return !a.of && 1 === a.opacity && !a.Pk && a.visible
	};
	d.prototype.Pd = function() {
		this.fa.length = 0;
		var a, b, c;
		a = 0;
		for (b = this.O.length; a < b; a++) c = this.O[a], c.Nb && this.fa.push(c)
	};
	d.prototype.Wk = function(a) {
		var b, c, d;
		b = 0;
		for (c = this.O.length; b < c; b++)
			if (d = this.O[b], d.name === a) return d;
		return null
	};
	var c = [];
	d.prototype.qm = function() {
		this.qp &&
			(this.Le = this.b.Mk[this.qp], this.Le.Bm());
		this.b.$ = this;
		this.scrollX = this.b.ob / 2;
		this.scrollY = this.b.nb / 2;
		var a, e, d, g, r, n, q;
		a = 0;
		for (d = this.b.B.length; a < d; a++)
			if (e = this.b.B[a], !e.K)
				for (r = e.i, e = 0, g = r.length; e < g; e++)
					if (n = r[e], n.q) {
						var p = n.q.Ho;
						p >= this.Z.length && (p = this.Z.length - 1);
						n.q = this.Z[p];
						n.q.i.push(n);
						n.q.kc = !0
					}
		c.length = 0;
		this.Kq();
		a = 0;
		for (d = this.Z.length; a < d; a++) n = this.Z[a], n.Vq(), n.Ie = !0, e = n.Xb(0, 0, !0, !0), g = n.Xb(0, 0, !1, !0), n.Ie = !1, this.b.md && (e = e + 0.5 | 0, g = g + 0.5 | 0), n.fm(e, g, null);
		r = !1;
		if (!this.yg) {
			for (q in this.le)
				if (this.le.hasOwnProperty(q) &&
					(e = this.b.Ii(parseInt(q, 10))) && !e.K && this.b.Am(e)) {
					g = this.le[q];
					a = 0;
					for (d = g.length; a < d; a++) {
						n = null;
						if (e.Ea.he && (n = this.Hi(g[a].w.l), !n)) continue;
						n = this.b.ae(e.yc, n, !1, 0, 0, !0);
						this.b.$i(n, g[a]);
						r = !0;
						c.push(n)
					}
					g.length = 0
				}
			a = 0;
			for (d = this.Z.length; a < d; a++) this.Z[a].i.sort(b), this.Z[a].kc = !0
		}
		r && (this.b.yb(), this.b.fp());
		for (a = 0; a < c.length; a++)
			if (n = c[a], n.type.qc)
				for (d = n.Fg(), e = 0, g = n.type.Yb.length; e < g; e++) q = n.type.Yb[e], n.type !== q && (q.i.length > d ? n.siblings.push(q.i[d]) : q.yc && (r = this.b.ae(q.yc, n.q, !0, n.x,
					n.y, !0), this.b.yb(), q.Vj(), n.siblings.push(r), c.push(r)));
		a = 0;
		for (d = this.Re.length; a < d; a++) this.b.ae(this.Re[a], null, !0);
		this.b.Fe = null;
		this.b.yb();
		if (this.b.ra && !this.b.lb)
			for (a = 0, d = this.b.B.length; a < d; a++) q = this.b.B[a], !q.K && q.i.length && q.sj && q.sj(this.b.ra);
		a = 0;
		for (d = c.length; a < d; a++) n = c[a], this.b.trigger(Object.getPrototypeOf(n.type.Ea).p.bk, n);
		c.length = 0;
		this.b.trigger(Q.prototype.p.Om, null);
		this.yg = !1
	};
	d.prototype.Uq = function() {
		var a, b, c, d, g;
		b = a = 0;
		for (c = this.Re.length; a < c; a++) d = this.Re[a], g =
			this.b.B[d[1]], g.global ? this.b.ae(d, null, !0) : (this.Re[b] = d, b++);
		this.Re.length = b
	};
	d.prototype.Nt = function() {
		this.b.trigger(Q.prototype.p.gq, null);
		this.b.sd.Tb.length = 0;
		var a, b, c, d, g, n;
		a = 0;
		for (b = this.Z.length; a < b; a++) {
			g = this.Z[a].i;
			c = 0;
			for (d = g.length; c < d; c++) n = g[c], n.type.global || (this.b.Am(n.type) && this.Dt(n), this.b.Qd(n));
			this.b.yb();
			g.length = 0;
			this.Z[a].kc = !0
		}
		a = 0;
		for (b = this.b.B.length; a < b; a++)
			if (g = this.b.B[a], !(g.global || g.Ea.he || g.Ea.Ej || g.K)) {
				c = 0;
				for (d = g.i.length; c < d; c++) this.b.Qd(g.i[c]);
				this.b.yb()
			}
	};
	d.prototype.Ad = function(a) {
		var b, c = a,
			d = !1,
			g = !this.b.Bc;
		g && (this.b.Yi || (this.b.Yi = document.createElement("canvas"), b = this.b.Yi, b.width = this.b.W, b.height = this.b.V, this.b.uo = b.getContext("2d"), d = !0), b = this.b.Yi, c = this.b.uo, b.width !== this.b.W && (b.width = this.b.W, d = !0), b.height !== this.b.V && (b.height = this.b.V, d = !0), d && (c.webkitImageSmoothingEnabled = this.b.ba, c.mozImageSmoothingEnabled = this.b.ba, c.msImageSmoothingEnabled = this.b.ba, c.imageSmoothingEnabled = this.b.ba));
		c.globalAlpha = 1;
		c.globalCompositeOperation =
			"source-over";
		this.b.rk && !this.Un() && c.clearRect(0, 0, this.b.W, this.b.V);
		var n, q, d = 0;
		for (n = this.Z.length; d < n; d++) q = this.Z[d], q.visible && 0 < q.opacity && 11 !== q.Ob && q.Ad(c);
		g && a.drawImage(b, 0, 0, this.b.width, this.b.height)
	};
	d.prototype.Ac = function(a) {
		var b = 0 < this.fa.length || this.b.eg || !this.b.Bc;
		if (b) {
			this.b.fc || (this.b.fc = a.$d(this.b.W, this.b.V, this.b.ba));
			if (this.b.fc.qg !== this.b.W || this.b.fc.pg !== this.b.V) a.deleteTexture(this.b.fc), this.b.fc = a.$d(this.b.W, this.b.V, this.b.ba);
			a.qd(this.b.fc);
			this.b.Bc ||
				a.Yf(this.b.W, this.b.V)
		} else this.b.fc && (a.qd(null), a.deleteTexture(this.b.fc), this.b.fc = null);
		this.b.rk && !this.Un() && a.clear(0, 0, 0, 0);
		var c, d;
		c = 0;
		for (d = this.Z.length; c < d; c++) this.Z[c].visible && 0 < this.Z[c].opacity && this.Z[c].Ac(a);
		b && (0 === this.fa.length || 1 === this.fa.length && this.b.Bc ? (1 === this.fa.length ? (b = this.fa[0].index, a.rd(this.fa[0].xb), a.Xf(null, 1 / this.b.W, 1 / this.b.V, 0, 0, 1, 1, this.scale, this.n, 0, 0, this.Ha[b]), a.tj(this.fa[0].xb) && (this.b.ha = !0)) : a.rd(0), this.b.Bc || a.Yf(this.b.width, this.b.height),
			a.qd(null), a.gf(1), a.hc(this.b.fc), a.kp(), a.ne(), a.ve(), b = this.b.width / 2, c = this.b.height / 2, a.wj(-b, c, b, c, b, -c, -b, -c), a.hc(null)) : this.dm(a, null, null, null))
	};
	d.prototype.Dg = function() {
		return 0 < this.fa.length || this.b.eg || !this.b.Bc ? this.b.fc : null
	};
	d.prototype.Qn = function() {
		var a = this.Z[0].Dc(),
			b, c, d;
		b = 1;
		for (c = this.Z.length; b < c; b++) d = this.Z[b], (0 !== d.Gc || 0 !== d.Hc) && d.Dc() < a && (a = d.Dc());
		return a
	};
	d.prototype.km = function(a) {
		if (!this.Gp) {
			var b = this.b.W * (1 / this.Qn()) / 2;
			a > this.width - b && (a = this.width - b);
			a <
				b && (a = b)
		}
		this.scrollX !== a && (this.scrollX = a, this.b.ha = !0)
	};
	d.prototype.jp = function(a) {
		if (!this.Gp) {
			var b = this.b.V * (1 / this.Qn()) / 2;
			a > this.height - b && (a = this.height - b);
			a < b && (a = b)
		}
		this.scrollY !== a && (this.scrollY = a, this.b.ha = !0)
	};
	d.prototype.Kq = function() {
		this.km(this.scrollX);
		this.jp(this.scrollY)
	};
	d.prototype.dm = function(a, b, c, d) {
		var g = c ? c.fa : b ? b.fa : this.fa,
			n = 1,
			q = 0,
			p = 0,
			v = 0;
		c ? (n = c.q.Dc(), q = c.q.kb(), p = c.q.Lb, v = c.q.Mb) : b && (n = b.Dc(), q = b.kb(), p = b.Lb, v = b.Mb);
		var u = this.b.Sk,
			f, x, m, w, l = 0,
			t = 1,
			k, H = this.b.W,
			I = this.b.V,
			G = H / 2,
			ba = I / 2,
			y = b ? b.ph : this.ph,
			K = b ? b.am : this.am,
			z = 0,
			M = 0,
			N = 0,
			L = 0,
			J = H,
			C = H,
			D = I,
			P = I,
			O = m = 0,
			F = c ? c.q.kb() : 0;
		if (c) {
			f = 0;
			for (x = g.length; f < x; f++) m += a.ds(g[f].xb), O += a.es(g[f].xb);
			w = c.Ra;
			z = b.Hb(w.left, w.top, !0, !0);
			N = b.Hb(w.left, w.top, !1, !0);
			J = b.Hb(w.right, w.bottom, !0, !0);
			D = b.Hb(w.right, w.bottom, !1, !0);
			0 !== F && (f = b.Hb(w.right, w.top, !0, !0), x = b.Hb(w.right, w.top, !1, !0), M = b.Hb(w.left, w.bottom, !0, !0), L = b.Hb(w.left, w.bottom, !1, !0), w = Math.min(z, J, f, M), J = Math.max(z, J, f, M), z = w, w = Math.min(N, D, x, L), D = Math.max(N, D, x, L), N = w);
			z -= m;
			N -= O;
			J += m;
			D += O;
			K.left = z / H;
			K.top = 1 - N / I;
			K.right = J / H;
			K.bottom = 1 - D / I;
			M = z = pa(z);
			L = N = pa(N);
			C = J = qa(J);
			P = D = qa(D);
			M -= m;
			L -= O;
			C += m;
			P += O;
			0 > z && (z = 0);
			0 > N && (N = 0);
			J > H && (J = H);
			D > I && (D = I);
			0 > M && (M = 0);
			0 > L && (L = 0);
			C > H && (C = H);
			P > I && (P = I);
			y.left = z / H;
			y.top = 1 - N / I;
			y.right = J / H;
			y.bottom = 1 - D / I
		} else y.left = K.left = 0, y.top = K.top = 0, y.right = K.right = 1, y.bottom = K.bottom = 1;
		O = c && ((c.n || F) && a.nh(g[0].xb) || 0 !== m || 0 !== O || 1 !== c.opacity || c.type.Ea.Do) || b && !c && 1 !== b.opacity;
		a.kp();
		if (O) {
			u[l] || (u[l] = a.$d(H, I, this.b.ba));
			if (u[l].qg !== H || u[l].pg !==
				I) a.deleteTexture(u[l]), u[l] = a.$d(H, I, this.b.ba);
			a.rd(0);
			a.qd(u[l]);
			k = P - L;
			a.clearRect(M, I - L - k, C - M, k);
			c ? c.Ac(a) : (a.hc(this.b.tc), a.gf(b.opacity), a.ne(), a.translate(-G, -ba), a.ve(), a.nd(z, D, J, D, J, N, z, N, y));
			K.left = K.top = 0;
			K.right = K.bottom = 1;
			c && (w = y.top, y.top = y.bottom, y.bottom = w);
			l = 1;
			t = 0
		}
		a.gf(1);
		m = g.length - 1;
		var F = a.Zl(g[m].xb) || !b && !c && !this.b.Bc,
			W = 0;
		f = 0;
		for (x = g.length; f < x; f++) {
			u[l] || (u[l] = a.$d(H, I, this.b.ba));
			if (u[l].qg !== H || u[l].pg !== I) a.deleteTexture(u[l]), u[l] = a.$d(H, I, this.b.ba);
			a.rd(g[f].xb);
			W =
				g[f].index;
			a.tj(g[f].xb) && (this.b.ha = !0);
			0 != f || O ? (a.Xf(d, 1 / H, 1 / I, K.left, K.top, K.right, K.bottom, n, q, p, v, c ? c.Ha[W] : b ? b.Ha[W] : this.Ha[W]), a.hc(null), f !== m || F ? (a.qd(u[l]), k = P - L, w = I - L - k, a.clearRect(M, w, C - M, k)) : (c ? a.oe(c.Cb, c.zb) : b && a.oe(b.Cb, b.zb), a.qd(d)), a.hc(u[t]), a.ne(), a.translate(-G, -ba), a.ve(), a.nd(z, D, J, D, J, N, z, N, y), f !== m || F || a.hc(null)) : (a.qd(u[l]), k = P - L, w = I - L - k, a.clearRect(M, w, C - M, k), c ? (a.Xf(d, 1 / c.width, 1 / c.height, K.left, K.top, K.right, K.bottom, n, q, p, v, c.Ha[W]), c.Ac(a)) : (a.Xf(d, 1 / H, 1 / I, 0, 0, 1,
				1, n, q, p, v, b ? b.Ha[W] : this.Ha[W]), a.hc(b ? this.b.tc : this.b.fc), a.ne(), a.translate(-G, -ba), a.ve(), a.nd(z, D, J, D, J, N, z, N, y)), K.left = K.top = 0, K.right = K.bottom = 1, c && !F && (w = D, D = N, N = w));
			l = 0 === l ? 1 : 0;
			t = 0 === l ? 1 : 0
		}
		F && (a.rd(0), c ? a.oe(c.Cb, c.zb) : b ? a.oe(b.Cb, b.zb) : this.b.Bc || (a.Yf(this.b.width, this.b.height), G = this.b.width / 2, ba = this.b.height / 2, N = z = 0, J = this.b.width, D = this.b.height), a.qd(d), a.hc(u[t]), a.ne(), a.translate(-G, -ba), a.ve(), c && 1 === g.length && !O ? a.nd(z, N, J, N, J, D, z, D, y) : a.nd(z, D, J, D, J, N, z, N, y), a.hc(null))
	};
	d.prototype.Hi =
		function(a) {
			var b, c;
			b = 0;
			for (c = this.Z.length; b < c; b++)
				if (this.Z[b].X === a) return this.Z[b];
			return null
		};
	d.prototype.Bb = function() {
		var a, b, c, d = {
			sx: this.scrollX,
			sy: this.scrollY,
			s: this.scale,
			a: this.n,
			w: this.width,
			h: this.height,
			fv: this.yg,
			persist: this.le,
			fx: [],
			layers: {}
		};
		a = 0;
		for (b = this.O.length; a < b; a++) c = this.O[a], d.fx.push({
			name: c.name,
			active: c.Nb,
			params: this.Ha[c.index]
		});
		a = 0;
		for (b = this.Z.length; a < b; a++) c = this.Z[a], d.layers[c.X.toString()] = c.Bb();
		return d
	};
	d.prototype.Rb = function(a) {
		var b, c, d, g;
		this.scrollX =
			a.sx;
		this.scrollY = a.sy;
		this.scale = a.s;
		this.n = a.a;
		this.width = a.w;
		this.height = a.h;
		this.le = a.persist;
		"undefined" !== typeof a.fv && (this.yg = a.fv);
		var n = a.fx;
		b = 0;
		for (c = n.length; b < c; b++)
			if (d = this.Wk(n[b].name)) d.Nb = n[b].active, this.Ha[d.index] = n[b].params;
		this.Pd();
		b = a.layers;
		for (g in b) b.hasOwnProperty(g) && (a = this.Hi(parseInt(g, 10))) && a.Rb(b[g])
	};
	Bb = d;
	g.prototype.Pd = function() {
		this.fa.length = 0;
		var a, b, c;
		a = 0;
		for (b = this.O.length; a < b; a++) c = this.O[a], c.Nb && this.fa.push(c)
	};
	g.prototype.Wk = function(a) {
		var b, c,
			d;
		b = 0;
		for (c = this.O.length; b < c; b++)
			if (d = this.O[b], d.name === a) return d;
		return null
	};
	g.prototype.Vq = function() {
		var a, b, d, g, r, n;
		b = a = 0;
		for (d = this.Df.length; a < d; a++) {
			g = this.Df[a];
			r = this.b.B[g[1]];
			n = this.b.Am(r);
			r = !0;
			if (!n || this.wa.yg) g = this.b.ae(g, this, !0), c.push(g), g.type.global && (r = !1);
			r && (this.Df[b] = this.Df[a], b++)
		}
		this.Df.length = b;
		this.b.yb();
		!this.b.C && this.O.length && (this.Ob = this.pr);
		this.rg = ab(this.Ob);
		this.b.A && bb(this, this.Ob, this.b.A)
	};
	g.prototype.Wt = function() {
		if (this.kc) {
			var a, b;
			a = 0;
			for (b = this.i.length; a <
				b; a++) this.i[a].pf = a;
			this.kc = !1
		}
	};
	g.prototype.Dc = function(a) {
		return this.bs() * (this.b.Bc || a ? this.b.ng : 1)
	};
	g.prototype.bs = function() {
		return (this.scale * this.wa.scale - 1) * this.dd + 1
	};
	g.prototype.kb = function() {
		return this.Ie ? 0 : Ca(this.wa.n + this.n)
	};
	g.prototype.Ad = function(a) {
		this.me = this.Pk || 1 !== this.opacity || 0 !== this.Ob;
		var b = this.b.canvas,
			c = a,
			d = !1;
		this.me && (this.b.Xi || (this.b.Xi = document.createElement("canvas"), b = this.b.Xi, b.width = this.b.W, b.height = this.b.V, this.b.to = b.getContext("2d"), d = !0), b = this.b.Xi,
			c = this.b.to, b.width !== this.b.W && (b.width = this.b.W, d = !0), b.height !== this.b.V && (b.height = this.b.V, d = !0), d && (c.webkitImageSmoothingEnabled = this.b.ba, c.mozImageSmoothingEnabled = this.b.ba, c.msImageSmoothingEnabled = this.b.ba, c.imageSmoothingEnabled = this.b.ba), this.of && c.clearRect(0, 0, this.b.W, this.b.V));
		c.globalAlpha = 1;
		c.globalCompositeOperation = "source-over";
		this.of || (c.fillStyle = "rgb(" + this.Ud[0] + "," + this.Ud[1] + "," + this.Ud[2] + ")", c.fillRect(0, 0, this.b.W, this.b.V));
		c.save();
		this.Ie = !0;
		var d = this.Xb(0,
				0, !0, !0),
			g = this.Xb(0, 0, !1, !0);
		this.Ie = !1;
		this.b.md && (d = d + 0.5 | 0, g = g + 0.5 | 0);
		this.fm(d, g, c);
		var n = this.Dc();
		c.scale(n, n);
		c.translate(-d, -g);
		for (var q, d = 0, g = this.i.length; d < g; d++) n = this.i[d], n.visible && 0 !== n.width && 0 !== n.height && (n.La(), q = n.Ra, q.right < this.Lb || q.bottom < this.Mb || q.left > this.Oc || q.top > this.Nc || (c.globalCompositeOperation = n.rg, n.Ad(c)));
		c.restore();
		this.me && (a.globalCompositeOperation = this.rg, a.globalAlpha = this.opacity, a.drawImage(b, 0, 0))
	};
	g.prototype.fm = function(a, b, c) {
		var d = this.Dc();
		this.Lb = a;
		this.Mb = b;
		this.Oc = a + this.b.W * (1 / d);
		this.Nc = b + this.b.V * (1 / d);
		a = this.kb();
		0 !== a && (c && (c.translate(this.b.W / 2, this.b.V / 2), c.rotate(-a), c.translate(this.b.W / -2, this.b.V / -2)), this.Od.set(this.Lb, this.Mb, this.Oc, this.Nc), this.Od.offset((this.Lb + this.Oc) / -2, (this.Mb + this.Nc) / -2), this.Ap.op(this.Od, a), this.Ap.mn(this.Od), this.Od.offset((this.Lb + this.Oc) / 2, (this.Mb + this.Nc) / 2), this.Lb = this.Od.left, this.Mb = this.Od.top, this.Oc = this.Od.right, this.Nc = this.Od.bottom)
	};
	g.prototype.Ac = function(a) {
		var b =
			this.b.W,
			c = this.b.V,
			d = 0,
			g = 0;
		if (this.me = this.Pk || 1 !== this.opacity || 0 < this.fa.length || 0 !== this.Ob) {
			this.b.tc || (this.b.tc = a.$d(this.b.W, this.b.V, this.b.ba));
			if (this.b.tc.qg !== this.b.W || this.b.tc.pg !== this.b.V) a.deleteTexture(this.b.tc), this.b.tc = a.$d(this.b.W, this.b.V, this.b.ba);
			a.qd(this.b.tc);
			this.of && a.clear(0, 0, 0, 0)
		}
		this.of || a.clear(this.Ud[0] / 255, this.Ud[1] / 255, this.Ud[2] / 255, 1);
		this.Ie = !0;
		var g = this.Xb(0, 0, !0, !0),
			n = this.Xb(0, 0, !1, !0);
		this.Ie = !1;
		this.b.md && (g = g + 0.5 | 0, n = n + 0.5 | 0);
		this.fm(g, n, null);
		n = this.Dc();
		a.ne();
		a.scale(n, n);
		a.hp(-this.kb());
		a.translate((this.Lb + this.Oc) / -2, (this.Mb + this.Nc) / -2);
		a.ve();
		var q, p, v;
		q = 0;
		for (p = this.i.length; q < p; q++)
			if (v = this.i[q], v.visible && 0 !== v.width && 0 !== v.height && (v.La(), d = v.Ra, !(d.right < this.Lb || d.bottom < this.Mb || d.left > this.Oc || d.top > this.Nc)))
				if (v.Mp)
					if (d = v.fa[0].xb, g = v.fa[0].index, 1 !== v.fa.length || a.Zl(d) || a.jt(d) || (v.n || v.q.kb()) && a.nh(d) || 1 !== v.opacity || v.type.Ea.Do) this.wa.dm(a, this, v, this.me ? this.b.tc : this.wa.Dg()), a.ne(), a.scale(n, n), a.hp(-this.kb()),
						a.translate((this.Lb + this.Oc) / -2, (this.Mb + this.Nc) / -2), a.ve();
					else {
						a.rd(d);
						a.oe(v.Cb, v.zb);
						a.tj(d) && (this.b.ha = !0);
						var u = 0,
							f = 0,
							x = 0,
							m = 0;
						a.nh(d) && (d = v.Ra, u = this.Hb(d.left, d.top, !0, !0), f = this.Hb(d.left, d.top, !1, !0), x = this.Hb(d.right, d.bottom, !0, !0), d = this.Hb(d.right, d.bottom, !1, !0), u /= b, f = 1 - f / c, x /= b, m = 1 - d / c);
						a.Xf(this.me ? this.b.tc : this.wa.Dg(), 1 / v.width, 1 / v.height, u, f, x, m, this.Dc(), this.kb(), this.Lb, this.Mb, v.Ha[g]);
						v.Ac(a)
					} else a.rd(0), a.oe(v.Cb, v.zb), v.Ac(a);
		this.me && (d = this.fa.length ? this.fa[0].xb :
			0, g = this.fa.length ? this.fa[0].index : 0, 0 === this.fa.length || 1 === this.fa.length && !a.Zl(d) && 1 === this.opacity ? (1 === this.fa.length ? (a.rd(d), a.Xf(this.wa.Dg(), 1 / this.b.W, 1 / this.b.V, 0, 0, 1, 1, this.Dc(), this.kb(), this.Lb, this.Mb, this.Ha[g]), a.tj(d) && (this.b.ha = !0)) : a.rd(0), a.qd(this.wa.Dg()), a.gf(this.opacity), a.hc(this.b.tc), a.oe(this.Cb, this.zb), a.ne(), a.ve(), b = this.b.W / 2, c = this.b.V / 2, a.wj(-b, c, b, c, b, -c, -b, -c), a.hc(null)) : this.wa.dm(a, this, null, this.wa.Dg()))
	};
	g.prototype.Xb = function(a, b, c, d) {
		var g = this.b.devicePixelRatio;
		this.b.Se && (a *= g, b *= g);
		var g = this.b.Wo,
			n = this.b.Xo,
			g = (this.wa.scrollX - g) * this.Gc + g,
			n = (this.wa.scrollY - n) * this.Hc + n,
			q = 1 / this.Dc(!d);
		d ? (g -= this.b.W * q / 2, n -= this.b.V * q / 2) : (g -= this.b.width * q / 2, n -= this.b.height * q / 2);
		g += a * q;
		n += b * q;
		b = this.kb();
		0 !== b && (g -= this.wa.scrollX, n -= this.wa.scrollY, a = Math.cos(b), b = Math.sin(b), d = g * a - n * b, n = n * a + g * b, g = d + this.wa.scrollX, n += this.wa.scrollY);
		return c ? g : n
	};
	g.prototype.Hb = function(a, b, c, d) {
		var g = this.kb();
		if (0 !== g) {
			a -= this.wa.scrollX;
			b -= this.wa.scrollY;
			var n = Math.cos(-g),
				g =
				Math.sin(-g),
				q = a * n - b * g;
			b = b * n + a * g;
			a = q + this.wa.scrollX;
			b += this.wa.scrollY
		}
		n = this.b.Wo;
		g = this.b.Xo;
		n = (this.wa.scrollX - n) * this.Gc + n;
		g = (this.wa.scrollY - g) * this.Hc + g;
		q = 1 / this.Dc(!d);
		d ? (n -= this.b.W * q / 2, g -= this.b.V * q / 2) : (n -= this.b.width * q / 2, g -= this.b.height * q / 2);
		n = (a - n) / q;
		g = (b - g) / q;
		a = this.b.devicePixelRatio;
		this.b.Se && !d && (n /= a, g /= a);
		return c ? n : g
	};
	g.prototype.Bb = function() {
		var a, b, c, d = {
			s: this.scale,
			a: this.n,
			vl: this.Lb,
			vt: this.Mb,
			vr: this.Oc,
			vb: this.Nc,
			v: this.visible,
			bc: this.Ud,
			t: this.of,
			px: this.Gc,
			py: this.Hc,
			o: this.opacity,
			zr: this.dd,
			fx: [],
			instances: []
		};
		a = 0;
		for (b = this.O.length; a < b; a++) c = this.O[a], d.fx.push({
			name: c.name,
			active: c.Nb,
			params: this.Ha[c.index]
		});
		return d
	};
	g.prototype.Rb = function(a) {
		var c, d;
		this.scale = a.s;
		this.n = a.a;
		this.Lb = a.vl;
		this.Mb = a.vt;
		this.Oc = a.vr;
		this.Nc = a.vb;
		this.visible = a.v;
		this.Ud = a.bc;
		this.of = a.t;
		this.Gc = a.px;
		this.Hc = a.py;
		this.opacity = a.o;
		this.dd = a.zr;
		var g = a.fx;
		a = 0;
		for (c = g.length; a < c; a++)
			if (d = this.Wk(g[a].name)) d.Nb = g[a].active, this.Ha[d.index] = g[a].params;
		this.Pd();
		this.i.sort(b);
		this.kc = !0
	};
	Rb = g
})();
(function() {
	function d(a, b) {
		var c, e = a.length;
		switch (e) {
			case 0:
				return !0;
			case 1:
				return a[0] === b[0];
			case 2:
				return a[0] === b[0] && a[1] === b[1];
			default:
				for (c = 0; c < e; c++)
					if (a[c] !== b[c]) return !1;
				return !0
		}
	}

	function g(a, b) {
		return a.index - b.index
	}

	function b(a) {
		var b, c, e, f;
		2 === a.length ? a[0].index > a[1].index && (b = a[0], a[0] = a[1], a[1] = b) : 2 < a.length && a.sort(g);
		a.length >= u.length && (u.length = a.length + 1);
		u[a.length] || (u[a.length] = []);
		f = u[a.length];
		b = 0;
		for (c = f.length; b < c; b++)
			if (e = f[b], d(a, e)) return e;
		f.push(a);
		return a
	}

	function c(a, b) {
		this.b = a;
		this.Cp = {};
		this.Dn = {};
		this.el = !1;
		this.Xn = new da;
		this.Hk = [];
		this.sk = [];
		this.name = b[0];
		var c = b[1];
		this.de = [];
		var e, d;
		e = 0;
		for (d = c.length; e < d; e++) this.Zn(c[e], null, this.de)
	}

	function a(a) {
		this.type = a;
		this.i = [];
		this.ka = [];
		this.qa = !0
	}

	function e(a, b, c) {
		this.sheet = a;
		this.parent = b;
		this.b = a.b;
		this.xa = [];
		this.pe = [];
		this.Vn = this.Qj = this.xm = this.Ni = this.group = this.tp = !1;
		this.ib = [];
		this.Pc = [];
		this.Lc = [];
		this.Gg = "";
		this.Cf = this.Ni = this.group = !1;
		this.li = null;
		c[1] && (this.Gg = c[1][1].toLowerCase(),
			this.group = !0, this.Ni = !!c[1][0], this.li = [], this.Cf = this.Ni, this.b.Sd.push(this), this.b.Ji[this.Gg] = this);
		this.Xc = c[2];
		this.X = c[4];
		this.group || (this.b.ln[this.X.toString()] = this);
		var e = c[5];
		a = 0;
		for (b = e.length; a < b; a++) {
			var d = new Sb(this, e[a]);
			d.index = a;
			this.ib.push(d);
			this.dn(d.type)
		}
		e = c[6];
		a = 0;
		for (b = e.length; a < b; a++) d = new Tb(this, e[a]), d.index = a, this.Pc.push(d);
		if (8 === c.length)
			for (c = c[7], a = 0, b = c.length; a < b; a++) this.sheet.Zn(c[a], this, this.Lc);
		this.Ri = !1;
		this.ib.length && (this.Ri = null == this.ib[0].type &&
			this.ib[0].ub == Q.prototype.p.Rp)
	}

	function h(a, b) {
		var c, e, d;
		if (a && (-1 === b.indexOf(a) && b.push(a), a.qc))
			for (c = 0, e = a.Yb.length; c < e; c++) d = a.Yb[c], a !== d && -1 === b.indexOf(d) && b.push(d)
	}

	function s(a, b) {
		this.lc = a;
		this.sheet = a.sheet;
		this.b = a.b;
		this.R = [];
		this.va = [];
		this.T = {};
		this.index = -1;
		this.mg = !1;
		this.ub = b[1];
		this.trigger = 0 < b[3];
		this.Cn = 2 === b[3];
		this.Kd = b[4];
		this.jl = b[5];
		this.Ps = b[6];
		this.X = b[7];
		this.b.xf[this.X.toString()] = this; - 1 === b[0] ? (this.type = null, this.Qa = this.hm, this.Ee = null, this.vc = -1) : (this.type =
			this.b.B[b[0]], this.Qa = this.Ps ? this.Bt : this.gm, b[2] ? (this.Ee = this.type.Ei(b[2]), this.vc = this.type.Uk(b[2])) : (this.Ee = null, this.vc = -1), this.lc.parent && this.lc.parent.Dj());
		this.Cn && (this.Qa = this.Ct);
		if (10 === b.length) {
			var c, e, d = b[9];
			c = 0;
			for (e = d.length; c < e; c++) {
				var f = new Ub(this, d[c]);
				this.R.push(f)
			}
			this.va.length = d.length
		}
	}

	function r(a, b) {
		this.lc = a;
		this.sheet = a.sheet;
		this.b = a.b;
		this.R = [];
		this.va = [];
		this.T = {};
		this.index = -1;
		this.mg = !1;
		this.ub = b[1]; - 1 === b[0] ? (this.type = null, this.Qa = this.hm, this.Ee = null,
			this.vc = -1) : (this.type = this.b.B[b[0]], this.Qa = this.gm, b[2] ? (this.Ee = this.type.Ei(b[2]), this.vc = this.type.Uk(b[2])) : (this.Ee = null, this.vc = -1));
		this.X = b[3];
		this.b.uf[this.X.toString()] = this;
		if (6 === b.length) {
			var c, e, d = b[5];
			c = 0;
			for (e = d.length; c < e; c++) {
				var f = new Ub(this, d[c]);
				this.R.push(f)
			}
			this.va.length = d.length
		}
	}

	function n(a, b) {
		this.I = a;
		this.lc = a.lc;
		this.sheet = a.sheet;
		this.b = a.b;
		this.type = b[0];
		this.hd = null;
		this.qe = 0;
		this.get = null;
		this.rn = 0;
		this.wa = null;
		this.key = 0;
		this.object = null;
		this.index = 0;
		this.Hh =
			this.jf = this.Hh = this.jf = this.En = this.Me = this.Ih = null;
		this.Mc = !1;
		var c, e, d;
		switch (b[0]) {
			case 0:
			case 7:
				this.hd = new Vb(this, b[1]);
				this.qe = 0;
				this.get = this.ns;
				break;
			case 1:
				this.hd = new Vb(this, b[1]);
				this.qe = 0;
				this.get = this.os;
				break;
			case 5:
				this.hd = new Vb(this, b[1]);
				this.qe = 0;
				this.get = this.ss;
				break;
			case 3:
			case 8:
				this.rn = b[1];
				this.get = this.ls;
				break;
			case 6:
				this.wa = this.b.xl[b[1]];
				this.get = this.ts;
				break;
			case 9:
				this.key = b[1];
				this.get = this.rs;
				break;
			case 4:
				this.object = this.b.B[b[1]];
				this.get = this.us;
				this.lc.dn(this.object);
				this.I instanceof Tb ? this.lc.Dj() : this.lc.parent && this.lc.parent.Dj();
				break;
			case 10:
				this.index = b[1];
				a.type.K ? (this.get = this.ps, this.Mc = !0) : this.get = this.qs;
				break;
			case 11:
				this.Ih = b[1];
				this.Me = null;
				this.get = this.ms;
				break;
			case 2:
			case 12:
				this.En = b[1];
				this.get = this.ks;
				break;
			case 13:
				for (this.get = this.vs, this.jf = [], this.Hh = [], c = 1, e = b.length; c < e; c++) d = new Ub(this.I, b[c]), this.jf.push(d), this.Hh.push(0)
		}
	}

	function q(a, b, c) {
		this.sheet = a;
		this.parent = b;
		this.b = a.b;
		this.xa = [];
		this.name = c[1];
		this.Wj = c[2];
		this.Mi =
			c[3];
		this.Pg = !!c[4];
		this.Qi = !!c[5];
		this.X = c[6];
		this.b.hg[this.X.toString()] = this;
		this.data = this.Mi;
		this.parent ? (this.bf = this.Pg || this.Qi ? -1 : this.b.Mt++, this.b.Gq.push(this)) : (this.bf = -1, this.b.qk.push(this))
	}

	function p(a, b, c) {
		this.sheet = a;
		this.parent = b;
		this.b = a.b;
		this.xa = [];
		this.Ig = null;
		this.Bs = c[1];
		this.Nb = !0
	}

	function v() {
		this.xp = [];
		this.reset(null)
	}
	var u = [];
	c.prototype.toString = aa("name");
	c.prototype.Zn = function(a, b, c) {
		switch (a[0]) {
			case 0:
				a = new Wb(this, b, a);
				if (a.Xc)
					for (c.push(a), c = 0, b = a.ib.length; c <
						b; c++) a.ib[c].trigger && this.$n(a, c);
				else a.ko() ? this.$n(a, 0) : c.push(a);
				break;
			case 1:
				a = new Ob(this, b, a);
				c.push(a);
				break;
			case 2:
				a = new Xb(this, b, a), c.push(a)
		}
	};
	c.prototype.Ka = function() {
		var a, b;
		a = 0;
		for (b = this.de.length; a < b; a++) this.de[a].Ka(a < b - 1 && this.de[a + 1].Ri)
	};
	c.prototype.Bm = function() {
		this.Hk.length = 0;
		this.sk.length = 0;
		this.cn(this);
		this.sk.length = 0
	};
	c.prototype.cn = function(a) {
		var b, c, e, d, f = a.Hk,
			g = a.sk,
			h = this.Xn.fg();
		b = 0;
		for (c = h.length; b < c; ++b) e = h[b], d = e.Ig, !e.Nb || a === d || -1 < g.indexOf(d) || (g.push(d),
			d.cn(a), f.push(d))
	};
	c.prototype.Qa = function(a) {
		this.b.yv || (this.el = !0, a || (this.b.nl = !0));
		var b, c;
		b = 0;
		for (c = this.de.length; b < c; b++) {
			var e = this.de[b];
			e.Qa();
			this.b.zk(e.xa);
			this.b.gd.Sc() && !this.b.Pb.length || this.b.yb()
		}
		a || (this.b.nl = !1)
	};
	c.prototype.$n = function(a, b) {
		a.Xc || this.b.Tj.push(a);
		var c, e, d = a.ib[b],
			f;
		f = d.type ? d.type.name : "system";
		var g = (c = d.Cn) ? this.Dn : this.Cp;
		g[f] || (g[f] = []);
		f = g[f];
		g = d.ub;
		if (c) {
			if (d.R.length && (d = d.R[0], 1 === d.type && 2 === d.hd.type)) {
				d = d.hd.value.toLowerCase();
				c = 0;
				for (e = f.length; c <
					e; c++)
					if (f[c].method == g) {
						c = f[c].ug;
						c[d] ? c[d].push([a, b]) : c[d] = [
							[a, b]
						];
						return
					}
				c = {};
				c[d] = [
					[a, b]
				];
				f.push({
					method: g,
					ug: c
				})
			}
		} else {
			c = 0;
			for (e = f.length; c < e; c++)
				if (f[c].method == g) {
					f[c].ug.push([a, b]);
					return
				}
			S && g === S.prototype.p.tf ? f.unshift({
				method: g,
				ug: [
					[a, b]
				]
			}) : f.push({
				method: g,
				ug: [
					[a, b]
				]
			})
		}
	};
	Cb = c;
	a.prototype.dl = function() {
		return this.qa ? this.type.i.length : this.i.length
	};
	a.prototype.Cc = function() {
		return this.qa ? this.type.i : this.i
	};
	a.prototype.kh = function(a) {
		a && (a.b.Ab().$b.Xc ? (this.qa && (this.i.length = 0,
			wa(this.ka, a.type.i), this.qa = !1), a = this.ka.indexOf(a), -1 !== a && (this.i.push(this.ka[a]), this.ka.splice(a, 1))) : (this.qa = !1, this.i.length = 1, this.i[0] = a))
	};
	jb = a;
	window._c2hh_ = "FC0C90610538C4CA22DE48CC1E26609CF8989051";
	e.prototype.Ka = function(a) {
		var c, e = this.parent;
		if (this.group)
			for (this.Qj = !0; e;) {
				if (!e.group) {
					this.Qj = !1;
					break
				}
				e = e.parent
			}
		this.xm = !this.ko() && (!this.parent || this.parent.group && this.parent.Qj);
		this.Vn = !!a;
		this.pe = this.xa.slice(0);
		for (e = this.parent; e;) {
			a = 0;
			for (c = e.xa.length; a < c; a++) this.Eq(e.xa[a]);
			e = e.parent
		}
		this.xa = b(this.xa);
		this.pe = b(this.pe);
		a = 0;
		for (c = this.ib.length; a < c; a++) this.ib[a].Ka();
		a = 0;
		for (c = this.Pc.length; a < c; a++) this.Pc[a].Ka();
		a = 0;
		for (c = this.Lc.length; a < c; a++) this.Lc[a].Ka(a < c - 1 && this.Lc[a + 1].Ri)
	};
	e.prototype.Gt = function(a) {
		if (this.Cf !== !!a) {
			this.Cf = !!a;
			var b;
			a = 0;
			for (b = this.li.length; a < b; ++a) this.li[a].Ip();
			0 < b && this.b.$.Le && this.b.$.Le.Bm()
		}
	};
	e.prototype.dn = function(a) {
		h(a, this.xa)
	};
	e.prototype.Eq = function(a) {
		h(a, this.pe)
	};
	e.prototype.Dj = function() {
		this.tp = !0;
		this.parent && this.parent.Dj()
	};
	e.prototype.ko = function() {
		return this.ib.length ? this.ib[0].trigger : !1
	};
	e.prototype.Qa = function() {
		var a, b = !1,
			c, e = this.b,
			d = this.b.Ab();
		d.$b = this;
		var f = this.ib;
		this.Ri || (d.Kk = !1);
		if (this.Xc) {
			0 === f.length && (b = !0);
			d.Wa = 0;
			for (a = f.length; d.Wa < a; d.Wa++) f[d.Wa].trigger || (c = f[d.Wa].Qa()) && (b = !0);
			(d.Ve = b) && this.Aj()
		} else {
			d.Wa = 0;
			for (a = f.length; d.Wa < a; d.Wa++)
				if (c = f[d.Wa].Qa(), !c) {
					d.Ve = !1;
					!this.xm || e.gd.Sc() && !e.Pb.length || e.yb();
					return
				}
			d.Ve = !0;
			this.Aj()
		}
		this.rr(d)
	};
	e.prototype.rr = function(a) {
		a.Ve && this.Vn && (a.Kk = !0);
		!this.xm || this.b.gd.Sc() && !this.b.Pb.length || this.b.yb()
	};
	e.prototype.zt = function(a) {
		this.b.Ab().$b = this;
		this.ib[a].Qa() && (this.Aj(), this.b.Ab().Ve = !0)
	};
	e.prototype.Aj = function() {
		var a = this.b.Ab(),
			b;
		a.Ub = 0;
		for (b = this.Pc.length; a.Ub < b; a.Ub++)
			if (this.Pc[a.Ub].Qa()) return;
		this.ip()
	};
	e.prototype.tt = function() {
		var a = this.b.Ab(),
			b;
		for (b = this.Pc.length; a.Ub < b; a.Ub++)
			if (this.Pc[a.Ub].Qa()) return;
		this.ip()
	};
	e.prototype.ip = function() {
		if (this.Lc.length) {
			var a, b, c, e, d = this.Lc.length - 1;
			this.b.vj(this);
			if (this.tp)
				for (a =
					0, b = this.Lc.length; a < b; a++) c = this.Lc[a], (e = !this.Qj || !this.group && a < d) && this.b.uj(c.xa), c.Qa(), e ? this.b.ff(c.xa) : this.b.zk(c.xa);
			else
				for (a = 0, b = this.Lc.length; a < b; a++) this.Lc[a].Qa();
			this.b.pj()
		}
	};
	e.prototype.At = function() {
		var a = this.b.Ab();
		a.$b = this;
		var b = !1,
			c;
		a.Wa = 0;
		for (c = this.ib.length; a.Wa < c; a.Wa++)
			if (this.ib[a.Wa].Qa()) b = !0;
			else if (!this.Xc) return !1;
		return this.Xc ? b : !0
	};
	e.prototype.ut = function() {
		this.b.xi++;
		var a = this.b.Ab().Wa,
			b = this.b.vj(this);
		if (!this.Xc)
			for (b.Wa = a + 1, a = this.ib.length; b.Wa <
				a; b.Wa++)
				if (!this.ib[b.Wa].Qa()) {
					this.b.pj();
					return
				}
		this.Aj();
		this.b.pj()
	};
	e.prototype.Js = function(a) {
		var b = a.index;
		if (0 === b) return !0;
		for (--b; 0 <= b; --b)
			if (this.ib[b].type === a.type) return !1;
		return !0
	};
	Wb = e;
	s.prototype.Ka = function() {
		var a, b, c;
		a = 0;
		for (b = this.R.length; a < b; a++) c = this.R[a], c.Ka(), c.Mc && (this.mg = !0)
	};
	s.prototype.Ct = B(!0);
	s.prototype.hm = function() {
		var a, b;
		a = 0;
		for (b = this.R.length; a < b; a++) this.va[a] = this.R[a].get();
		return Pa(this.ub.apply(this.b.sd, this.va), this.jl)
	};
	s.prototype.Bt = function() {
		var a,
			b;
		a = 0;
		for (b = this.R.length; a < b; a++) this.va[a] = this.R[a].get();
		a = this.ub.apply(this.Ee ? this.Ee : this.type, this.va);
		this.type.Rc();
		return a
	};
	s.prototype.gm = function() {
		var a, b, c, e, d, f, g, h, p = this.type,
			n = p.ga(),
			s = this.lc.Xc && !this.trigger;
		b = 0;
		var r = p.qc,
			v = p.K,
			q = p.Cd,
			u = this.vc,
			x = -1 < u,
			C = this.mg,
			D = this.R,
			P = this.va,
			O = this.jl,
			F = this.ub,
			W;
		if (C)
			for (b = 0, d = D.length; b < d; ++b) f = D[b], f.Mc || (P[b] = f.get(0));
		else
			for (b = 0, d = D.length; b < d; ++b) P[b] = D[b].get(0);
		if (n.qa) {
			n.i.length = 0;
			n.ka.length = 0;
			W = p.i;
			a = 0;
			for (e = W.length; a <
				e; ++a) {
				h = W[a];
				if (C)
					for (b = 0, d = D.length; b < d; ++b) f = D[b], f.Mc && (P[b] = f.get(a));
				x ? (b = 0, v && (b = h.type.zf[q]), b = F.apply(h.S[u + b], P)) : b = F.apply(h, P);
				(g = Pa(b, O)) ? n.i.push(h): s && n.ka.push(h)
			}
			p.finish && p.finish(!0);
			n.qa = !1;
			p.Rc();
			return n.dl()
		}
		c = 0;
		W = (g = s && !this.lc.Js(this)) ? n.ka : n.i;
		var R = !1;
		a = 0;
		for (e = W.length; a < e; ++a) {
			h = W[a];
			if (C)
				for (b = 0, d = D.length; b < d; ++b) f = D[b], f.Mc && (P[b] = f.get(a));
			x ? (b = 0, v && (b = h.type.zf[q]), b = F.apply(h.S[u + b], P)) : b = F.apply(h, P);
			if (Pa(b, O))
				if (R = !0, g) {
					if (n.i.push(h), r)
						for (b = 0, d = h.siblings.length; b <
							d; b++) f = h.siblings[b], f.type.ga().i.push(f)
				} else {
					W[c] = h;
					if (r)
						for (b = 0, d = h.siblings.length; b < d; b++) f = h.siblings[b], f.type.ga().i[c] = f;
					c++
				} else if (g) {
				W[c] = h;
				if (r)
					for (b = 0, d = h.siblings.length; b < d; b++) f = h.siblings[b], f.type.ga().ka[c] = f;
				c++
			} else if (s && (n.ka.push(h), r))
				for (b = 0, d = h.siblings.length; b < d; b++) f = h.siblings[b], f.type.ga().ka.push(f)
		}
		W.length = c;
		if (r)
			for (v = p.Yb, a = 0, e = v.length; a < e; a++) h = v[a].ga(), g ? h.ka.length = c : h.i.length = c;
		c = R;
		if (g && !R)
			for (a = 0, e = n.i.length; a < e; a++) {
				h = n.i[a];
				if (C)
					for (b = 0, d = D.length; b <
						d; b++) f = D[b], f.Mc && (P[b] = f.get(a));
				b = x ? F.apply(h.S[u], P) : F.apply(h, P);
				if (Pa(b, O)) {
					R = !0;
					break
				}
			}
		p.finish && p.finish(c || s);
		return s ? R : n.dl()
	};
	Sb = s;
	r.prototype.Ka = function() {
		var a, b, c;
		a = 0;
		for (b = this.R.length; a < b; a++) c = this.R[a], c.Ka(), c.Mc && (this.mg = !0)
	};
	r.prototype.hm = function() {
		var a, b;
		a = 0;
		for (b = this.R.length; a < b; a++) this.va[a] = this.R[a].get();
		return this.ub.apply(this.b.sd, this.va)
	};
	r.prototype.gm = function() {
		var a = this.type.ga().Cc(),
			b = this.type.K,
			c = this.type.Cd,
			e = this.vc,
			d = -1 < e,
			f = this.mg,
			g = this.R,
			h = this.va,
			p = this.ub,
			n, s, r, v, q, u;
		if (f)
			for (s = 0, v = g.length; s < v; ++s) q = g[s], q.Mc || (h[s] = q.get(0));
		else
			for (s = 0, v = g.length; s < v; ++s) h[s] = g[s].get(0);
		n = 0;
		for (r = a.length; n < r; ++n) {
			u = a[n];
			if (f)
				for (s = 0, v = g.length; s < v; ++s) q = g[s], q.Mc && (h[s] = q.get(n));
			d ? (s = 0, b && (s = u.type.zf[c]), p.apply(u.S[e + s], h)) : p.apply(u, h)
		}
		return !1
	};
	Tb = r;
	var f = [],
		x = -1;
	n.prototype.Ka = function() {
		var a, b;
		if (11 === this.type) this.Me = this.b.Mn(this.Ih, this.lc.parent);
		else if (13 === this.type)
			for (a = 0, b = this.jf.length; a < b; a++) this.jf[a].Ka();
		this.hd &&
			this.hd.Ka()
	};
	n.prototype.Us = function(a) {
		this.Mc || !a || a.Ea.Ej || (this.Mc = !0)
	};
	n.prototype.mp = function() {
		this.Mc = !0
	};
	n.prototype.bb = function() {
		x++;
		f.length === x && f.push(new Yb);
		return f[x]
	};
	n.prototype.Pa = function() {
		x--
	};
	n.prototype.ns = function(a) {
		this.qe = a || 0;
		a = this.bb();
		this.hd.get(a);
		this.Pa();
		return a.data
	};
	n.prototype.os = function(a) {
		this.qe = a || 0;
		a = this.bb();
		this.hd.get(a);
		this.Pa();
		return ha(a.data) ? a.data : ""
	};
	n.prototype.us = aa("object");
	n.prototype.ls = aa("rn");
	n.prototype.ss = function(a) {
		this.qe =
			a || 0;
		a = this.bb();
		this.hd.get(a);
		this.Pa();
		return a.mb() ? this.b.Bg(a.data) : this.b.Yk(a.data)
	};
	n.prototype.ts = aa("wa");
	n.prototype.rs = aa("key");
	n.prototype.qs = aa("index");
	n.prototype.ps = function(a) {
		a = a || 0;
		var b = this.I.type,
			c = null,
			c = b.ga(),
			e = c.Cc();
		if (e.length) c = e[a % e.length].type;
		else if (c.ka.length) c = c.ka[a % c.ka.length].type;
		else if (b.i.length) c = b.i[a % b.i.length].type;
		else return 0;
		return this.index + c.Ai[b.Cd]
	};
	n.prototype.ms = aa("Me");
	n.prototype.ks = aa("En");
	n.prototype.vs = function() {
		var a, b;
		a = 0;
		for (b =
			this.jf.length; a < b; a++) this.Hh[a] = this.jf[a].get();
		return this.Hh
	};
	Ub = n;
	q.prototype.Ka = function() {
		this.xa = b(this.xa)
	};
	q.prototype.hf = function(a) {
		var b = this.b.Ln();
		this.parent && !this.Pg && b ? (this.bf >= b.length && (b.length = this.bf + 1), b[this.bf] = a) : this.data = a
	};
	q.prototype.Eg = function() {
		var a = this.b.Ln();
		return !this.parent || this.Pg || !a || this.Qi ? this.data : this.bf >= a.length || "undefined" === typeof a[this.bf] ? this.Mi : a[this.bf]
	};
	q.prototype.Qa = function() {
		!this.parent || this.Pg || this.Qi || this.hf(this.Mi)
	};
	Ob =
		q;
	p.prototype.toString = function() {
		return "include:" + this.Ig.toString()
	};
	p.prototype.Ka = function() {
		this.Ig = this.b.Mk[this.Bs];
		this.sheet.Xn.add(this);
		this.xa = b(this.xa);
		for (var a = this.parent; a;) a.group && a.li.push(this), a = a.parent;
		this.Ip()
	};
	p.prototype.Qa = function() {
		this.parent && this.b.oh(this.b.B);
		this.Ig.el || this.Ig.Qa(!0);
		this.parent && this.b.ff(this.b.B)
	};
	p.prototype.Ip = function() {
		for (var a = this.parent; a;) {
			if (a.group && !a.Cf) {
				this.Nb = !1;
				return
			}
			a = a.parent
		}
		this.Nb = !0
	};
	Xb = p;
	v.prototype.reset = function(a) {
		this.$b =
			a;
		this.Ub = this.Wa = 0;
		this.xp.length = 0;
		this.Kk = this.Ve = !1
	};
	Nb = v
})();
(function() {
	function d(b, c) {
		this.I = b;
		this.b = b.b;
		this.type = c[0];
		this.get = [this.Fr, this.Br, this.Nr, this.Qr, this.tr, this.Or, this.Jr, this.xr, this.Ir, this.Mr, this.ur, this.Lr, this.yr, this.Kr, this.Gr, this.Hr, this.Cr, this.Dr, this.wr, this.Pr, this.An, this.Er, this.An, this.Ar][this.type];
		var a = null;
		this.Sb = this.R = this.va = this.ub = this.Nj = this.qb = this.first = this.value = null;
		this.vc = -1;
		this.Ed = null;
		this.Em = -1;
		this.Me = this.Ih = null;
		this.qh = !1;
		switch (this.type) {
			case 0:
			case 1:
			case 2:
				this.value = c[1];
				break;
			case 3:
				this.first =
					new Vb(b, c[1]);
				break;
			case 18:
				this.first = new Vb(b, c[1]);
				this.qb = new Vb(b, c[2]);
				this.Nj = new Vb(b, c[3]);
				break;
			case 19:
				this.ub = c[1];
				this.ub !== Q.prototype.J.random && this.ub !== Q.prototype.J.gi || this.I.mp();
				this.va = [];
				this.R = [];
				3 === c.length ? (a = c[2], this.va.length = a.length + 1) : this.va.length = 1;
				break;
			case 20:
				this.Sb = this.b.B[c[1]];
				this.vc = -1;
				this.ub = c[2];
				this.qh = c[3];
				ac.Up && this.ub === ac.Up.prototype.J.iu && this.I.mp();
				this.Ed = c[4] ? new Vb(b, c[4]) : null;
				this.va = [];
				this.R = [];
				6 === c.length ? (a = c[5], this.va.length =
					a.length + 1) : this.va.length = 1;
				break;
			case 21:
				this.Sb = this.b.B[c[1]];
				this.qh = c[2];
				this.Ed = c[3] ? new Vb(b, c[3]) : null;
				this.Em = c[4];
				break;
			case 22:
				this.Sb = this.b.B[c[1]];
				this.Sb.Ei(c[2]);
				this.vc = this.Sb.Uk(c[2]);
				this.ub = c[3];
				this.qh = c[4];
				this.Ed = c[5] ? new Vb(b, c[5]) : null;
				this.va = [];
				this.R = [];
				7 === c.length ? (a = c[6], this.va.length = a.length + 1) : this.va.length = 1;
				break;
			case 23:
				this.Ih = c[1], this.Me = null
		}
		this.I.Us(this.Sb);
		4 <= this.type && 17 >= this.type && (this.first = new Vb(b, c[1]), this.qb = new Vb(b, c[2]));
		if (a) {
			var e, d;
			e = 0;
			for (d = a.length; e < d; e++) this.R.push(new Vb(b, a[e]))
		}
	}

	function g(b, c) {
		this.type = b || Zb.sf;
		this.data = c || 0;
		this.Sf = null;
		this.type == Zb.sf && (this.data = Math.floor(this.data))
	}
	d.prototype.Ka = function() {
		23 === this.type && (this.Me = this.I.b.Mn(this.Ih, this.I.lc.parent));
		this.first && this.first.Ka();
		this.qb && this.qb.Ka();
		this.Nj && this.Nj.Ka();
		this.Ed && this.Ed.Ka();
		if (this.R) {
			var b, c;
			b = 0;
			for (c = this.R.length; b < c; b++) this.R[b].Ka()
		}
	};
	d.prototype.Pr = function(b) {
		this.va[0] = b;
		b = this.I.bb();
		var c, a;
		c = 0;
		for (a = this.R.length; c <
			a; c++) this.R[c].get(b), this.va[c + 1] = b.data;
		this.I.Pa();
		this.ub.apply(this.b.sd, this.va)
	};
	d.prototype.An = function(b) {
		var c = this.Sb.ga(),
			a = c.Cc();
		if (!a.length)
			if (c.ka.length) a = c.ka;
			else {
				this.qh ? b.ic("") : b.za(0);
				return
			}
		this.va[0] = b;
		b.Sf = this.Sb;
		b = this.I.bb();
		var e, c = 0;
		for (e = this.R.length; c < e; c++) this.R[c].get(b), this.va[c + 1] = b.data;
		c = this.I.qe;
		this.Ed && (this.Ed.get(b), b.mb() && (c = b.data, a = this.Sb.i));
		this.I.Pa();
		c %= a.length;
		0 > c && (c += a.length);
		a = a[c]; - 1 < this.vc ? (b = 0, this.Sb.K && (b = a.type.zf[this.Sb.Cd]),
			this.ub.apply(a.S[this.vc + b], this.va)) : this.ub.apply(a, this.va)
	};
	d.prototype.Er = function(b) {
		var c = this.Sb.ga(),
			a = c.Cc();
		if (!a.length)
			if (c.ka.length) a = c.ka;
			else {
				this.qh ? b.ic("") : b.za(0);
				return
			}
		c = this.I.qe;
		if (this.Ed) {
			var e = this.I.bb();
			this.Ed.get(e);
			if (e.mb()) {
				c = e.data;
				a = this.Sb.i;
				c %= a.length;
				0 > c && (c += a.length);
				a = a[c].Ya[this.Em];
				ha(a) ? b.ic(a) : b.F(a);
				this.I.Pa();
				return
			}
			this.I.Pa()
		}
		c %= a.length;
		0 > c && (c += a.length);
		a = a[c];
		c = 0;
		this.Sb.K && (c = a.type.Ai[this.Sb.Cd]);
		a = a.Ya[this.Em + c];
		ha(a) ? b.ic(a) : b.F(a)
	};
	d.prototype.Fr = function(b) {
		b.type = Zb.sf;
		b.data = this.value
	};
	d.prototype.Br = function(b) {
		b.type = Zb.rf;
		b.data = this.value
	};
	d.prototype.Nr = function(b) {
		b.type = Zb.Rh;
		b.data = this.value
	};
	d.prototype.Qr = function(b) {
		this.first.get(b);
		b.mb() && (b.data = -b.data)
	};
	d.prototype.tr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.mb() && c.mb() && (b.data += c.data, c.Hf() && b.Pf());
		this.I.Pa()
	};
	d.prototype.Or = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.mb() && c.mb() && (b.data -= c.data, c.Hf() &&
			b.Pf());
		this.I.Pa()
	};
	d.prototype.Jr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.mb() && c.mb() && (b.data *= c.data, c.Hf() && b.Pf());
		this.I.Pa()
	};
	d.prototype.xr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.mb() && c.mb() && (b.data /= c.data, b.Pf());
		this.I.Pa()
	};
	d.prototype.Ir = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.mb() && c.mb() && (b.data %= c.data, c.Hf() && b.Pf());
		this.I.Pa()
	};
	d.prototype.Mr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.mb() && c.mb() && (b.data = Math.pow(b.data, c.data), c.Hf() && b.Pf());
		this.I.Pa()
	};
	d.prototype.ur = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.mb() ? c.Si() ? b.ic(b.data.toString() + c.data) : b.data && c.data ? b.za(1) : b.za(0) : b.Si() && (b.data = c.Si() ? b.data + c.data : b.data + (Math.round(1E10 * c.data) / 1E10).toString());
		this.I.Pa()
	};
	d.prototype.Lr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.mb() && c.mb() && (b.data || c.data ? b.za(1) : b.za(0));
		this.I.Pa()
	};
	d.prototype.wr = function(b) {
		this.first.get(b);
		b.data ? this.qb.get(b) : this.Nj.get(b)
	};
	d.prototype.yr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.za(b.data === c.data ? 1 : 0);
		this.I.Pa()
	};
	d.prototype.Kr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.za(b.data !== c.data ? 1 : 0);
		this.I.Pa()
	};
	d.prototype.Gr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.za(b.data < c.data ? 1 : 0);
		this.I.Pa()
	};
	d.prototype.Hr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.za(b.data <= c.data ? 1 : 0);
		this.I.Pa()
	};
	d.prototype.Cr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.za(b.data > c.data ? 1 : 0);
		this.I.Pa()
	};
	d.prototype.Dr = function(b) {
		this.first.get(b);
		var c = this.I.bb();
		this.qb.get(c);
		b.za(b.data >= c.data ? 1 : 0);
		this.I.Pa()
	};
	d.prototype.Ar = function(b) {
		var c = this.Me.Eg();
		ga(c) ? b.F(c) : b.ic(c)
	};
	Vb = d;
	g.prototype.Hf = function() {
		return this.type === Zb.rf
	};
	g.prototype.mb = function() {
		return this.type === Zb.sf || this.type === Zb.rf
	};
	g.prototype.Si = function() {
		return this.type === Zb.Rh
	};
	g.prototype.Pf = function() {
		this.Hf() ||
			(this.Si() && (this.data = parseFloat(this.data)), this.type = Zb.rf)
	};
	g.prototype.za = function(b) {
		this.type = Zb.sf;
		this.data = Math.floor(b)
	};
	g.prototype.F = function(b) {
		this.type = Zb.rf;
		this.data = b
	};
	g.prototype.ic = function(b) {
		this.type = Zb.Rh;
		this.data = b
	};
	g.prototype.Kt = function(b) {
		ga(b) ? (this.type = Zb.rf, this.data = b) : ha(b) ? (this.type = Zb.Rh, this.data = b.toString()) : (this.type = Zb.sf, this.data = 0)
	};
	Yb = g;
	Zb = {
		sf: 0,
		rf: 1,
		Rh: 2
	}
})();

function Q(d) {
	this.b = d;
	this.Tb = []
}
Q.prototype.Bb = function() {
	var d = {},
		g, b, c, a, e, h, s, r;
	d.waits = [];
	var n = d.waits,
		q;
	g = 0;
	for (b = this.Tb.length; g < b; g++) {
		h = this.Tb[g];
		q = {
			t: h.time,
			ev: h.yf.X,
			sm: [],
			sols: {}
		};
		h.yf.Pc[h.Ub] && (q.act = h.yf.Pc[h.Ub].X);
		c = 0;
		for (a = h.xa.length; c < a; c++) q.sm.push(h.xa[c].X);
		for (e in h.Kb)
			if (h.Kb.hasOwnProperty(e)) {
				s = this.b.B[parseInt(e, 10)];
				r = {
					sa: h.Kb[e].Bj,
					insts: []
				};
				c = 0;
				for (a = h.Kb[e].Fd.length; c < a; c++) r.insts.push(h.Kb[e].Fd[c].uid);
				q.sols[s.X.toString()] = r
			}
		n.push(q)
	}
	return d
};
Q.prototype.Rb = function(d) {
	d = d.waits;
	var g, b, c, a, e, h, s, r, n, q, p;
	g = this.Tb.length = 0;
	for (b = d.length; g < b; g++)
		if (h = d[g], r = this.b.ln[h.ev.toString()]) {
			n = -1;
			c = 0;
			for (a = r.Pc.length; c < a; c++)
				if (r.Pc[c].X === h.act) {
					n = c;
					break
				}
			if (-1 !== n) {
				s = {
					Kb: {},
					xa: [],
					Ik: !1
				};
				s.time = h.t;
				s.yf = r;
				s.Ub = n;
				c = 0;
				for (a = h.sm.length; c < a; c++)(r = this.b.Ii(h.sm[c])) && s.xa.push(r);
				for (e in h.sols)
					if (h.sols.hasOwnProperty(e) && (r = this.b.Ii(parseInt(e, 10)))) {
						n = h.sols[e];
						q = {
							Bj: n.sa,
							Fd: []
						};
						c = 0;
						for (a = n.insts.length; c < a; c++)(p = this.b.Cg(n.insts[c])) &&
							q.Fd.push(p);
						s.Kb[r.index.toString()] = q
					}
				this.Tb.push(s)
			}
		}
};
(function() {
	function d() {}

	function g() {}

	function b() {}
	var c = Q.prototype;
	d.prototype.Tp = B(!0);
	d.prototype.Om = B(!0);
	d.prototype.gq = B(!0);
	d.prototype.wq = function() {
		var a = this.b.Fi().T;
		"undefined" === typeof a.nk && (a.nk = -1);
		var b = a.nk,
			c = this.b.nf;
		a.nk = c;
		return this.b.wl || b !== c - 1
	};
	d.prototype.Sp = function(a) {
		var b = this.b.Fi(),
			c = b.T.Lh || 0,
			e = this.b.rc.aa;
		"undefined" === typeof b.T.Zj && (b.T.Zj = a);
		var d = b.T.Zj;
		if (e >= c + d) return b.T.Lh = c + d, e >= b.T.Lh + 0.04 && (b.T.Lh = e), b.T.Zj = a, !0;
		e < c - 0.1 && (b.T.Lh = e);
		return !1
	};
	d.prototype.we =
		function(a, b, c) {
			return $b(a.Eg(), b, c)
		};
	d.prototype.Rp = function() {
		var a = this.b.Ab();
		return a.Kk ? !1 : !a.Ve
	};
	d.prototype.Pm = B(!0);
	d.prototype.$p = B(!0);
	d.prototype.fk = B(!0);
	d.prototype.hq = B(!0);
	d.prototype.ek = B(!0);
	c.p = new d;
	g.prototype.Vp = function(a) {
		this.b.Jf || this.b.Fe || (this.b.Fe = a)
	};
	g.prototype.xe = function(a, b, c, e) {
		if (b && a && (b = this.b.tn(a, b, c, e))) {
			this.b.Tc++;
			var d;
			this.b.trigger(Object.getPrototypeOf(a.Ea).p.bk, b);
			if (b.qc)
				for (c = 0, e = b.siblings.length; c < e; c++) d = b.siblings[c], this.b.trigger(Object.getPrototypeOf(d.type.Ea).p.bk,
					d);
			this.b.Tc--;
			a = a.ga();
			a.qa = !1;
			a.i.length = 1;
			a.i[0] = b;
			if (b.qc)
				for (c = 0, e = b.siblings.length; c < e; c++) d = b.siblings[c], a = d.type.ga(), a.qa = !1, a.i.length = 1, a.i[0] = d
		}
	};
	g.prototype.qq = function(a) {
		this.b.$.km(a)
	};
	g.prototype.sb = function(a, b) {
		0 === a.Wj ? ga(b) ? a.hf(b) : a.hf(parseFloat(b)) : 1 === a.Wj && a.hf(b.toString())
	};
	g.prototype.Qp = function(a, b) {
		0 === a.Wj ? ga(b) ? a.hf(a.Eg() + b) : a.hf(a.Eg() + parseFloat(b)) : 1 === a.Wj && a.hf(a.Eg() + b.toString())
	};
	var a = [],
		e = [];
	g.prototype.Sh = function(b) {
		if (!(0 > b)) {
			var c, d, g, q = this.b.Ab(),
				p;
			p = a.length ? a.pop() : {
				Kb: {},
				xa: []
			};
			p.Ik = !1;
			p.time = this.b.rc.aa + b;
			p.yf = q.$b;
			p.Ub = q.Ub + 1;
			b = 0;
			for (c = this.b.B.length; b < c; b++) g = this.b.B[b], d = g.ga(), d.qa && -1 === q.$b.xa.indexOf(g) || (p.xa.push(g), g = void 0, g = e.length ? e.pop() : {
				Fd: []
			}, g.Bj = !1, g.Bj = d.qa, wa(g.Fd, d.i), p.Kb[b.toString()] = g);
			this.Tb.push(p);
			return !0
		}
	};
	g.prototype.nq = function() {
		var a, b, c;
		a = 0;
		for (b = this.b.qk.length; a < b; a++) c = this.b.qk[a], c.data = c.Mi
	};
	g.prototype.oq = function() {
		if (!this.b.Jf && !this.b.Fe && this.b.$) {
			this.b.Fe = this.b.$;
			var a, b, c;
			a = 0;
			for (b =
				this.b.Sd.length; a < b; a++) c = this.b.Sd[a], c.Gt(c.Ni)
		}
	};
	c.k = new g;
	b.prototype["int"] = function(a, b) {
		ha(b) ? (a.za(parseInt(b, 10)), isNaN(a.data) && (a.data = 0)) : a.za(b)
	};
	b.prototype["float"] = function(a, b) {
		ha(b) ? (a.F(parseFloat(b)), isNaN(a.data) && (a.data = 0)) : a.F(b)
	};
	b.prototype.random = function(a, b, c) {
		void 0 === c ? a.F(Math.random() * b) : a.F(Math.random() * (c - b) + b)
	};
	b.prototype.sqrt = function(a, b) {
		a.F(Math.sqrt(b))
	};
	b.prototype.abs = function(a, b) {
		a.F(Math.abs(b))
	};
	b.prototype.round = function(a, b) {
		a.za(Math.round(b))
	};
	b.prototype.floor = function(a, b) {
		a.za(Math.floor(b))
	};
	b.prototype.ceil = function(a, b) {
		a.za(Math.ceil(b))
	};
	b.prototype.sin = function(a, b) {
		a.F(Math.sin(E(b)))
	};
	b.prototype.cos = function(a, b) {
		a.F(Math.cos(E(b)))
	};
	b.prototype.tan = function(a, b) {
		a.F(Math.tan(E(b)))
	};
	b.prototype.asin = function(a, b) {
		a.F(Aa(Math.asin(b)))
	};
	b.prototype.acos = function(a, b) {
		a.F(Aa(Math.acos(b)))
	};
	b.prototype.exp = function(a, b) {
		a.F(Math.exp(b))
	};
	b.prototype.max = function(a) {
		var b = arguments[1],
			c, e;
		c = 2;
		for (e = arguments.length; c < e; c++) b <
			arguments[c] && (b = arguments[c]);
		a.F(b)
	};
	b.prototype.min = function(a) {
		var b = arguments[1],
			c, e;
		c = 2;
		for (e = arguments.length; c < e; c++) b > arguments[c] && (b = arguments[c]);
		a.F(b)
	};
	b.prototype.Je = function(a) {
		a.F(this.b.Je)
	};
	b.prototype.cg = function(a) {
		a.F(this.b.cg)
	};
	b.prototype.time = function(a) {
		a.F(this.b.rc.aa)
	};
	b.prototype.nf = function(a) {
		a.za(this.b.nf)
	};
	b.prototype.dj = function(a) {
		a.za(this.b.dj)
	};
	b.prototype.Qk = function(a) {
		a.za(this.b.Qk)
	};
	b.prototype.n = function(a, b, c, e, d) {
		a.F(Aa(Fa(b, c, e, d)))
	};
	b.prototype.left =
		function(a, b, c) {
			a.ic(ha(b) ? b.substr(0, c) : "")
		};
	b.prototype.right = function(a, b, c) {
		a.ic(ha(b) ? b.substr(b.length - c) : "")
	};
	b.prototype.replace = function(a, b, c, e) {
		ha(b) && ha(c) && ha(e) ? a.ic(b.replace(RegExp(Ya(c), "gi"), e)) : a.ic(ha(b) ? b : "")
	};
	b.prototype.gi = function(a) {
		var b = pa(Math.random() * (arguments.length - 1));
		a.Kt(arguments[b + 1])
	};
	b.prototype.Bk = function(a) {
		a.F(this.b.Bk / 1E3)
	};
	b.prototype.bj = function(a) {
		a.F(this.b.bj)
	};
	c.J = new b;
	c.yt = function() {
		var b, c, d, g, q, p, v = this.b.Ab();
		b = 0;
		for (d = this.Tb.length; b < d; b++)
			if (g =
				this.Tb[b], !(g.time > this.b.rc.aa)) {
				v.$b = g.yf;
				v.Ub = g.Ub;
				v.Wa = 0;
				for (c in g.Kb) g.Kb.hasOwnProperty(c) && (q = this.b.B[parseInt(c, 10)].ga(), p = g.Kb[c], q.qa = p.Bj, wa(q.i, p.Fd), q = p, q.Fd.length = 0, e.push(q));
				g.yf.tt();
				this.b.zk(g.xa);
				g.Ik = !0
			}
		c = b = 0;
		for (d = this.Tb.length; b < d; b++) g = this.Tb[b], this.Tb[c] = g, g.Ik ? (Ra(g.Kb), g.xa.length = 0, a.push(g)) : c++;
		this.Tb.length = c
	}
})();
(function() {
	ib = function(d) {
		var b = d[0].prototype,
			c = d[1],
			a = d[3],
			e = d[4],
			h = d[5],
			s = d[6],
			r = d[7];
		d = d[8];
		b.p || (b.p = {});
		b.k || (b.k = {});
		b.J || (b.J = {});
		var n = b.p,
			q = b.k,
			b = b.J;
		a && (n.ou = function(a, b) {
				return $b(this.x, a, b)
			}, n.Km = function(a, b) {
				return $b(this.y, a, b)
			}, n.wu = function() {
				var a = this.q;
				this.La();
				var b = this.Ra;
				return !(b.right < a.Lb || b.bottom < a.Mb || b.left > a.Oc || b.top > a.Nc)
			}, n.xu = function() {
				this.La();
				var a = this.Ra,
					b = this.b.$;
				return 0 > a.right || 0 > a.bottom || a.left > b.width || a.top > b.height
			}, n.Gu = function(a, b, c) {
				var e =
					this.ga(),
					d = e.Cc();
				if (!d.length) return !1;
				var g = d[0],
					h = g,
					l = Oa(g.x, g.y, b, c),
					t, k, n;
				t = 1;
				for (k = d.length; t < k; t++)
					if (g = d[t], n = Oa(g.x, g.y, b, c), 0 === a && n < l || 1 === a && n > l) l = n, h = g;
				e.kh(h);
				return !0
			}, q.dv = function(a) {
				this.x !== a && (this.x = a, this.ea())
			}, q.sq = function(a) {
				this.y !== a && (this.y = a, this.ea())
			}, q.Zu = function(a, b) {
				if (this.x !== a || this.y !== b) this.x = a, this.y = b, this.ea()
			}, q.Xm = function(a, b) {
				var c = a.cs(this);
				if (c) {
					var e;
					c.Gi ? (e = c.Gi(b, !0), c = c.Gi(b, !1)) : (e = c.x, c = c.y);
					if (this.x !== e || this.y !== c) this.x = e, this.y = c, this.ea()
				}
			},
			q.Bu = function(a) {
				0 !== a && (this.x += Math.cos(this.n) * a, this.y += Math.sin(this.n) * a, this.ea())
			}, q.Au = function(a, b) {
				0 !== b && (this.x += Math.cos(E(a)) * b, this.y += Math.sin(E(a)) * b, this.ea())
			}, b.Be = function(a) {
				a.F(this.x)
			}, b.kg = function(a) {
				a.F(this.y)
			}, b.Je = function(a) {
				a.F(this.b.Af(this))
			});
		e && (n.nu = function(a, b) {
				return $b(this.width, a, b)
			}, n.ju = function(a, b) {
				return $b(this.height, a, b)
			}, q.mk = function(a) {
				this.width !== a && (this.width = a, this.ea())
			}, q.Vu = function(a) {
				this.height !== a && (this.height = a, this.ea())
			}, q.$u =
			function(a, b) {
				if (this.width !== a || this.height !== b) this.width = a, this.height = b, this.ea()
			}, b.ok = function(a) {
				a.F(this.width)
			}, b.qu = function(a) {
				a.F(this.height)
			}, b.fu = function(a) {
				this.La();
				a.F(this.Ra.left)
			}, b.hu = function(a) {
				this.La();
				a.F(this.Ra.top)
			}, b.gu = function(a) {
				this.La();
				a.F(this.Ra.right)
			}, b.eu = function(a) {
				this.La();
				a.F(this.Ra.bottom)
			});
		h && (n.du = function(a, b) {
			return Ha(this.n, E(b)) <= E(a)
		}, n.uu = function(a) {
			return Ja(this.n, E(a))
		}, n.tu = function(a, b) {
			var c = Ea(a),
				e = Ea(b),
				d = Ca(this.n);
			return Ja(e,
				c) ? Ja(d, c) && !Ja(d, e) : !(!Ja(d, c) && Ja(d, e))
		}, q.Pu = function(a) {
			a = E(Ba(a));
			isNaN(a) || this.n === a || (this.n = a, this.ea())
		}, q.Lu = function(a) {
			0 === a || isNaN(a) || (this.n += E(a), this.n = Ca(this.n), this.ea())
		}, q.Mu = function(a) {
			0 === a || isNaN(a) || (this.n -= E(a), this.n = Ca(this.n), this.ea())
		}, q.Nu = function(a, b) {
			var c = Ia(this.n, E(b), E(a));
			isNaN(c) || this.n === c || (this.n = c, this.ea())
		}, q.Ou = function(a, b, c) {
			a = Ia(this.n, Math.atan2(c - this.y, b - this.x), E(a));
			isNaN(a) || this.n === a || (this.n = a, this.ea())
		}, q.av = function(a, b) {
			var c = Math.atan2(b -
				this.y, a - this.x);
			isNaN(c) || this.n === c || (this.n = c, this.ea())
		}, b.cu = function(a) {
			a.F(Da(this.n))
		});
		c || (n.ku = function(a, b, c) {
			return $b(this.Ya[a], b, c)
		}, n.$j = function(a) {
			return this.Ya[a]
		}, n.Hu = function(a, b) {
			var c = this.ga(),
				e = c.Cc();
			if (!e.length) return !1;
			var d = e[0],
				g = d,
				h = d.Ya[b],
				l, t, k;
			l = 1;
			for (t = e.length; l < t; l++)
				if (d = e[l], k = d.Ya[b], 0 === a && k < h || 1 === a && k > h) h = k, g = d;
			c.kh(g);
			return !0
		}, n.Tm = function(a) {
			var b, c, e, d, g;
			if (this.b.Fi().jl) {
				g = this.ga();
				if (g.qa)
					for (g.qa = !1, g.i.length = 0, g.ka.length = 0, e = this.i, b = 0, c =
						e.length; b < c; b++) d = e[b], d.uid === a ? g.ka.push(d) : g.i.push(d);
				else {
					e = b = 0;
					for (c = g.i.length; b < c; b++) d = g.i[b], g.i[e] = d, d.uid === a ? g.ka.push(d) : e++;
					g.i.length = e
				}
				this.Rc();
				return !!g.i.length
			}
			d = this.b.Cg(a);
			if (!d) return !1;
			g = this.ga();
			if (!g.qa && -1 === g.i.indexOf(d)) return !1;
			if (this.K)
				for (a = d.type.Ca, b = 0, c = a.length; b < c; b++) {
					if (a[b] === this) return g.kh(d), this.Rc(), !0
				} else if (d.type === this) return g.kh(d), this.Rc(), !0;
			return !1
		}, n.bk = B(!0), n.bq = B(!0), q.kk = function(a, b) {
			var c = this.Ya;
			ga(c[a]) ? c[a] = ga(b) ? b : parseFloat(b) :
				ha(c[a]) && (c[a] = ha(b) ? b : b.toString())
		}, q.bu = function(a, b) {
			var c = this.Ya;
			ga(c[a]) ? c[a] = ga(b) ? c[a] + b : c[a] + parseFloat(b) : ha(c[a]) && (c[a] = ha(b) ? c[a] + b : c[a] + b.toString())
		}, q.gv = function(a, b) {
			var c = this.Ya;
			ga(c[a]) && (c[a] = ga(b) ? c[a] - b : c[a] - parseFloat(b))
		}, q.ze = function(a, b) {
			this.Ya[a] = b ? 1 : 0
		}, q.iv = function(a) {
			this.Ya[a] = 1 - this.Ya[a]
		}, q.Yj = function() {
			this.b.Qd(this)
		}, q.Xp || (q.Xp = function(a) {
			var b, c;
			try {
				b = JSON.parse(a)
			} catch (e) {
				return
			}
			this.b.$i(this, b, !0);
			this.ed && this.ed();
			if (this.S)
				for (a = 0, b = this.S.length; a <
					b; ++a) c = this.S[a], c.ed && c.ed()
		}), b.pu = function(a) {
			var b = a.Sf.i.length,
				c, e, d;
			c = 0;
			for (e = this.b.Pb.length; c < e; c++) d = this.b.Pb[c], a.Sf.K ? 0 <= d.type.Ca.indexOf(a.Sf) && b++ : d.type === a.Sf && b++;
			a.za(b)
		}, b.Ju = function(a) {
			a.za(a.Sf.ga().Cc().length)
		}, b.jv = function(a) {
			a.za(this.uid)
		}, b.ru = function(a) {
			a.za(this.Fg())
		}, b.Jm || (b.Jm = function(a) {
			a.ic(JSON.stringify(this.b.im(this, !0)))
		}));
		s && (n.Wp = aa("visible"), q.Ae = function(a) {
			!a !== !this.visible && (this.visible = a, this.b.ha = !0)
		}, n.lu = function(a, b) {
			return $b(fb(100 *
				this.opacity), a, b)
		}, q.Xu = function(a) {
			a /= 100;
			0 > a ? a = 0 : 1 < a && (a = 1);
			a !== this.opacity && (this.opacity = a, this.b.ha = !0)
		}, b.Opacity = function(a) {
			a.F(fb(100 * this.opacity))
		});
		r && (n.vu = function(a) {
			return a ? this.q === a : !1
		}, n.Iu = function(a) {
			var b = this.ga(),
				c = b.Cc();
			if (!c.length) return !1;
			var e = c[0],
				d = e,
				g, h;
			g = 1;
			for (h = c.length; g < h; g++)
				if (e = c[g], 0 === a) {
					if (e.q.index > d.q.index || e.q.index === d.q.index && e.oc() > d.oc()) d = e
				} else if (e.q.index < d.q.index || e.q.index === d.q.index && e.oc() < d.oc()) d = e;
			b.kh(d);
			return !0
		}, q.Du = function() {
			var a =
				this.oc();
			a !== this.q.i.length - 1 && (va(this.q.i, a), this.q.i.push(this), this.b.ha = !0, this.q.kc = !0)
		}, q.ak = function() {
			var a = this.oc();
			0 !== a && (va(this.q.i, a), this.q.i.unshift(this), this.b.ha = !0, this.q.kc = !0)
		}, q.Cu = function(a) {
			a && a != this.q && (va(this.q.i, this.oc()), this.q.kc = !0, this.q = a, this.pf = a.i.length, a.i.push(this), this.b.ha = !0)
		}, q.mv = function(a, b) {
			var c = 0 === a;
			if (b) {
				var e = b.Nn(this);
				if (e && e.uid !== this.uid) {
					this.q.index !== e.q.index && (va(this.q.i, this.oc()), this.q.kc = !0, this.q = e.q, this.pf = e.q.i.length,
						e.q.i.push(this));
					var d = this.oc(),
						e = e.oc();
					va(this.q.i, d);
					d < e && e--;
					c && e++;
					e === this.q.i.length ? this.q.i.push(this) : this.q.i.splice(e, 0, this);
					this.q.kc = !0;
					this.b.ha = !0
				}
			}
		}, b.zu = function(a) {
			a.za(this.q.Ho)
		}, b.yu = function(a) {
			a.ic(this.q.name)
		}, b.lv = function(a) {
			a.za(this.oc())
		});
		d && (q.Su = function(a, b) {
			if (this.b.C) {
				var c = this.type.Xk(b);
				if (!(0 > c)) {
					var e = 1 === a;
					this.Rd[c] !== e && (this.Rd[c] = e, this.Pd(), this.b.ha = !0)
				}
			}
		}, q.Tu = function(a, b, c) {
			if (this.b.C) {
				var e = this.type.Xk(a);
				0 > e || (a = this.type.O[e], e = this.Ha[e],
					b = Math.floor(b), 0 > b || b >= e.length || (1 === this.b.C.gs(a.xb, b) && (c /= 100), e[b] !== c && (e[b] = c, a.Nb && (this.b.ha = !0))))
			}
		})
	};
	Db = function() {
		this.xk = this.uk = !0;
		this.type.Vh = !0;
		this.b.ha = !0;
		var d, b, c = this.vk;
		d = 0;
		for (b = c.length; d < b; ++d) c[d](this)
	};
	Hb = function(d) {
		d && this.vk.push(d)
	};
	Jb = function() {
		if (this.uk) {
			var d = this.Ra,
				b = this.Wb;
			d.set(this.x, this.y, this.x + this.width, this.y + this.height);
			d.offset(-this.Eb * this.width, -this.Fb * this.height);
			this.n ? (d.offset(-this.x, -this.y), b.op(d, this.n), b.offset(this.x, this.y),
				b.mn(d)) : b.vh(d);
			d.normalize();
			this.uk = !1
		}
	};
	var d = new sa(0, 0, 0, 0);
	Kb = function() {
		if (this.xk && this.xd) {
			this.La();
			var g = this.type.ki,
				b = this.ji,
				c = this.Ra;
			d.set(g.Th(c.left), g.Uh(c.top), g.Th(c.right), g.Uh(c.bottom));
			b.sr(d) || (b.right < b.left ? g.update(this, null, d) : g.update(this, b, d), b.copy(d), this.xk = !1)
		}
	};
	Ib = function(d, b) {
		return this.Ra.Zb(d, b) && this.Wb.Zb(d, b) ? this.ja && !this.ja.Gf() ? (this.ja.vf(this.width, this.height, this.n), this.ja.Zb(d - this.x, b - this.y)) : !0 : !1
	};
	zb = function() {
		this.type.Vj();
		return this.Qe
	};
	Lb = function() {
		this.q.Wt();
		return this.pf
	};
	Mb = function() {
		this.fa.length = 0;
		var d, b;
		d = 0;
		for (b = this.Rd.length; d < b; d++) this.Rd[d] && this.fa.push(this.type.O[d]);
		this.Mp = !!this.fa.length
	};
	Ab = function() {
		return "Inst" + this.cp
	};
	lb = function(d) {
		if (d && d.qc && d.type != this) {
			var b, c, a;
			b = 0;
			for (c = d.siblings.length; b < c; b++)
				if (a = d.siblings[b], a.type == this) return a
		}
		d = this.ga().Cc();
		return d.length ? d[0] : null
	};
	mb = function(d) {
		var b = this.ga().Cc();
		return b.length ? b[d.Fg() % b.length] : null
	};
	kb = function() {
		if (this.ag && !this.K) {
			var d,
				b;
			d = 0;
			for (b = this.i.length; d < b; d++) this.i[d].Qe = d;
			var c = d,
				a = this.b.Pb;
			d = 0;
			for (b = a.length; d < b; ++d) a[d].type === this && (a[d].Qe = c++);
			this.ag = !1
		}
	};
	xb = function(d) {
		if (d < this.i.length) return this.i[d];
		d -= this.i.length;
		var b = this.b.Pb,
			c, a;
		c = 0;
		for (a = b.length; c < a; ++c)
			if (b[c].type === this) {
				if (0 === d) return b[c];
				--d
			}
		return null
	};
	nb = function() {
		return this.re[this.zd]
	};
	ob = function() {
		this.zd++;
		this.zd === this.re.length ? this.re.push(new jb(this)) : this.re[this.zd].qa = !0
	};
	pb = function() {
		this.zd++;
		this.zd === this.re.length &&
			this.re.push(new jb(this));
		var d = this.re[this.zd],
			b = this.re[this.zd - 1];
		b.qa ? d.qa = !0 : (d.qa = !1, wa(d.i, b.i), wa(d.ka, b.ka))
	};
	sb = function() {
		this.zd--
	};
	tb = function(d) {
		var b, c, a, e, h, s = 0;
		if (!this.K)
			for (b = 0, c = this.Ca.length; b < c; b++)
				for (h = this.Ca[b], a = 0, e = h.Na.length; a < e; a++) {
					if (d === h.Na[a].name) return this.T.no = s, h.Na[a];
					s++
				}
		b = 0;
		for (c = this.Na.length; b < c; b++) {
			if (d === this.Na[b].name) return this.T.no = s, this.Na[b];
			s++
		}
		return null
	};
	ub = function(d) {
		return this.Ei(d) ? this.T.no : -1
	};
	vb = function(d) {
		var b, c;
		b = 0;
		for (c =
			this.O.length; b < c; b++)
			if (this.O[b].name === d) return b;
		return -1
	};
	wb = function() {
		if (this.qc && !this.K) {
			var d, b, c, a, e, h, s;
			this.Vj();
			h = this.ga();
			var r = h.qa,
				n = (d = this.b.Ab()) && d.$b && d.$b.Xc;
			d = 0;
			for (b = this.Yb.length; d < b; d++)
				if (e = this.Yb[d], e !== this && (e.Vj(), s = e.ga(), s.qa = r, !r)) {
					s.i.length = h.i.length;
					c = 0;
					for (a = h.i.length; c < a; c++) s.i[c] = e.On(h.i[c].Qe);
					if (n)
						for (s.ka.length = h.ka.length, c = 0, a = h.ka.length; c < a; c++) s.ka[c] = e.On(h.ka[c].Qe)
				}
		}
	};
	yb = function() {
		return "Type" + this.X
	};
	$b = function(d, b, c) {
		if ("undefined" ===
			typeof d || "undefined" === typeof c) return !1;
		switch (b) {
			case 0:
				return d === c;
			case 1:
				return d !== c;
			case 2:
				return d < c;
			case 3:
				return d <= c;
			case 4:
				return d > c;
			case 5:
				return d >= c;
			default:
				return !1
		}
	}
})();
var ic = {};

function kc(d) {
		this.b = d
	}
	(function() {
		function d(a) {
			0 > a && (a = 0);
			1 < a && (a = 1);
			return 20 * (Math.log(a) / Math.log(10))
		}

		function g(a) {
			a = a.toLowerCase();
			return X.hasOwnProperty(a) && X[a].length ? X[a][0].nc() : F.destination
		}

		function b() {
			return F.createGain ? F.createGain() : F.createGainNode()
		}

		function c(a) {
			return F.createDelay ? F.createDelay(a) : F.createDelayNode(a)
		}

		function a(a) {
			a.start ? a.start(0) : a.noteOn(0)
		}

		function e(a, b, c) {
			a.start ? a.start(0, b) : a.noteGrainOn(0, b, c - b)
		}

		function h(a) {
			try {
				a.stop ? a.stop(0) : a.noteOff(0)
			} catch (b) {}
		}

		function s(a,
			c, d, e, f, g) {
			this.type = "filter";
			this.Yc = [a, c, d, e, f, g];
			this.Y = b();
			this.N = b();
			this.N.gain.value = g;
			this.M = b();
			this.M.gain.value = 1 - g;
			this.Oa = F.createBiquadFilter();
			this.Oa.type = "number" === typeof this.Oa.type ? a : Nc[a];
			this.Oa.frequency.value = c;
			this.Oa.detune && (this.Oa.detune.value = d);
			this.Oa.Q.value = e;
			this.Oa.gain.value = f;
			this.Y.connect(this.Oa);
			this.Y.connect(this.M);
			this.Oa.connect(this.N)
		}

		function r(a, d, e) {
			this.type = "delay";
			this.Yc = [a, d, e];
			this.Y = b();
			this.N = b();
			this.N.gain.value = e;
			this.M = b();
			this.M.gain.value =
				1 - e;
			this.ah = b();
			this.zc = c(a);
			this.zc.delayTime.value = a;
			this.si = b();
			this.si.gain.value = d;
			this.Y.connect(this.ah);
			this.Y.connect(this.M);
			this.ah.connect(this.N);
			this.ah.connect(this.zc);
			this.zc.connect(this.si);
			this.si.connect(this.ah)
		}

		function n(a, c, d, e) {
			this.type = "convolve";
			this.Yc = [c, d, e];
			this.Y = b();
			this.N = b();
			this.N.gain.value = d;
			this.M = b();
			this.M.gain.value = 1 - d;
			this.Ge = F.createConvolver();
			a && (this.Ge.normalize = c, this.Ge.buffer = a);
			this.Y.connect(this.Ge);
			this.Y.connect(this.M);
			this.Ge.connect(this.N)
		}

		function q(d, e, f, g, k) {
			this.type = "flanger";
			this.Yc = [d, e, f, g, k];
			this.Y = b();
			this.M = b();
			this.M.gain.value = 1 - k / 2;
			this.N = b();
			this.N.gain.value = k / 2;
			this.Bi = b();
			this.Bi.gain.value = g;
			this.zc = c(d + e);
			this.zc.delayTime.value = d;
			this.pb = F.createOscillator();
			this.pb.frequency.value = f;
			this.gc = b();
			this.gc.gain.value = e;
			this.Y.connect(this.zc);
			this.Y.connect(this.M);
			this.zc.connect(this.N);
			this.zc.connect(this.Bi);
			this.Bi.connect(this.zc);
			this.pb.connect(this.gc);
			this.gc.connect(this.zc.delayTime);
			a(this.pb)
		}

		function p(c,
			d, e, f, g, k) {
			this.type = "phaser";
			this.Yc = [c, d, e, f, g, k];
			this.Y = b();
			this.M = b();
			this.M.gain.value = 1 - k / 2;
			this.N = b();
			this.N.gain.value = k / 2;
			this.Oa = F.createBiquadFilter();
			this.Oa.type = "number" === typeof this.Oa.type ? 7 : "allpass";
			this.Oa.frequency.value = c;
			this.Oa.detune && (this.Oa.detune.value = d);
			this.Oa.Q.value = e;
			this.pb = F.createOscillator();
			this.pb.frequency.value = g;
			this.gc = b();
			this.gc.gain.value = f;
			this.Y.connect(this.Oa);
			this.Y.connect(this.M);
			this.Oa.connect(this.N);
			this.pb.connect(this.gc);
			this.gc.connect(this.Oa.frequency);
			a(this.pb)
		}

		function v(a) {
			this.type = "gain";
			this.Yc = [a];
			this.ca = b();
			this.ca.gain.value = a
		}

		function u(c, d) {
			this.type = "tremolo";
			this.Yc = [c, d];
			this.ca = b();
			this.ca.gain.value = 1 - d / 2;
			this.pb = F.createOscillator();
			this.pb.frequency.value = c;
			this.gc = b();
			this.gc.gain.value = d / 2;
			this.pb.connect(this.gc);
			this.gc.connect(this.ca.gain);
			a(this.pb)
		}

		function f(c, d) {
			this.type = "ringmod";
			this.Yc = [c, d];
			this.Y = b();
			this.N = b();
			this.N.gain.value = d;
			this.M = b();
			this.M.gain.value = 1 - d;
			this.rh = b();
			this.rh.gain.value = 0;
			this.pb = F.createOscillator();
			this.pb.frequency.value = c;
			this.pb.connect(this.rh.gain);
			a(this.pb);
			this.Y.connect(this.rh);
			this.Y.connect(this.M);
			this.rh.connect(this.N)
		}

		function x(a, c, d, e, f) {
			this.type = "distortion";
			this.Yc = [a, c, d, e, f];
			this.Y = b();
			this.rj = b();
			this.qj = b();
			this.Ft(d, Math.pow(10, e / 20));
			this.N = b();
			this.N.gain.value = f;
			this.M = b();
			this.M.gain.value = 1 - f;
			this.Xj = F.createWaveShaper();
			this.qi = new Float32Array(65536);
			this.Wr(a, c);
			this.Xj.qi = this.qi;
			this.Y.connect(this.rj);
			this.Y.connect(this.M);
			this.rj.connect(this.Xj);
			this.Xj.connect(this.qj);
			this.qj.connect(this.N)
		}

		function m(a, b, c, d, e) {
			this.type = "compressor";
			this.Yc = [a, b, c, d, e];
			this.ca = F.createDynamicsCompressor();
			try {
				this.ca.threshold.value = a, this.ca.knee.value = b, this.ca.ratio.value = c, this.ca.attack.value = d, this.ca.release.value = e
			} catch (f) {}
		}

		function w(a, b) {
			this.type = "analyser";
			this.Yc = [a, b];
			this.ca = F.createAnalyser();
			this.ca.fftSize = a;
			this.ca.smoothingTimeConstant = b;
			this.Ur = new Float32Array(this.ca.frequencyBinCount);
			this.rp = new Uint8Array(a);
			this.jh = 0
		}

		function l() {
			this.U = null;
			this.aj =
				0;
			this.se = [];
			this.Il = this.Vi = this.Ui = 0
		}

		function t(a, c) {
			this.src = a;
			this.ta = O;
			this.Vc = c;
			this.gn = !1;
			var d = this;
			this.Gl = this.Tl = null;
			this.Wf = [];
			this.Cj = 0;
			this.vp = this.kj = !1;
			O === C && c && (this.ta = J, this.Tl = b());
			this.Xh = this.Da = null;
			var e;
			switch (this.ta) {
				case J:
					this.Da = new Audio;
					O !== C || !F.createMediaElementSource || z.eo || /wiiu/i.test(navigator.userAgent) || (this.vp = !0, this.Da.addEventListener("canplay", function() {
						d.Gl || (d.Gl = F.createMediaElementSource(d.Da), d.Gl.connect(d.Tl))
					}));
					this.Da.autoplay = !1;
					this.Da.wv =
						"auto";
					this.Da.src = a;
					break;
				case C:
					e = new XMLHttpRequest;
					e.open("GET", a, !0);
					e.responseType = "arraybuffer";
					e.onload = function() {
						d.Xh = e.response;
						d.Wq()
					};
					e.send();
					break;
				case D:
					this.Da = !0;
					break;
				case P:
					this.Da = !0
			}
		}

		function k(a, c) {
			var d = this;
			this.te = c;
			this.Kc = this.ee = !0;
			this.src = a.src;
			this.buffer = a;
			this.ta = O;
			this.Vc = a.Vc;
			this.playbackRate = 1;
			this.Vl = !0;
			this.Hd = this.Md = !1;
			this.ad = 0;
			this.Og = this.If = this.Kd = !1;
			this.bh = this.volume = 1;
			this.startTime = z.rc.aa;
			this.Ja = this.jb = null;
			this.ld = !1;
			this.Ia = null;
			this.To = this.So =
				this.Ro = this.Qo = this.Vo = this.Uo = 0;
			this.u = null;
			var e = !1;
			this.ta !== C || this.buffer.ta !== J || this.buffer.vp || (this.ta = J);
			switch (this.ta) {
				case J:
					this.Vc ? (this.u = a.Da, e = !a.gn, a.gn = !0) : (this.u = new Audio, this.u.autoplay = !1, this.u.src = a.Da.src, e = !0);
					e && this.u.addEventListener("ended", function() {
						N = d.te;
						d.Kc = !0;
						z.trigger(kc.prototype.p.dk, M)
					});
					break;
				case C:
					this.jb = b();
					this.jb.connect(g(c));
					this.buffer.ta === C ? a.Da && (this.u = F.createBufferSource(), this.u.buffer = a.Da, this.u.connect(this.jb)) : (this.u = this.buffer.Da,
						this.buffer.Tl.connect(this.jb));
					break;
				case D:
					this.u = new window.Media(L + this.src, null, null, function(a) {
						a === window.Media.MEDIA_STOPPED && (d.Vl = !0, d.Kc = !0, N = d.te, z.trigger(kc.prototype.p.dk, M))
					});
					break;
				case P:
					this.u = !0
			}
		}

		function H(a) {
			Ga.length = 0;
			if (a.length) {
				var b, c, d;
				b = 0;
				for (c = R.length; b < c; b++) d = R[b], gb(a, d.te) && Ga.push(d)
			} else Va && !Va.Hg() && (Ga.length = 1, Ga[0] = Va)
		}

		function I(a, b) {
			X.hasOwnProperty(a) ? X[a].push(b) : X[a] = [b];
			var c, d, e, f, g = F.destination;
			if (X.hasOwnProperty(a) && (e = X[a], e.length))
				for (g = e[0].nc(),
					c = 0, d = e.length; c < d; c++) f = e[c], c + 1 === d ? f.wc(F.destination) : f.wc(e[c + 1].nc());
			H(a);
			c = 0;
			for (d = Ga.length; c < d; c++) Ga[c].ot(g);
			Ua && Eb === a && (Ua.disconnect(), Ua.connect(g))
		}

		function G() {}

		function ba() {}

		function y() {}
		var K = kc.prototype;
		K.Fa = function(a) {
			this.Ea = a;
			this.b = a.b
		};
		K.Fa.prototype.da = A();
		var z = null,
			M = null,
			N = "",
			L = "",
			J = 0,
			C = 1,
			D = 2,
			P = 3,
			O = J,
			F = null,
			W = [],
			R = [],
			Va = null,
			qb = !1,
			rb = 0,
			La = !1,
			Ma = 1,
			Wa = 0,
			Xa = 0,
			Fb = 1,
			Gb = 1,
			Ac = 10,
			Bc = 1E4,
			Cc = 1,
			Ua = null,
			Eb = "",
			cb = !1,
			db = [],
			X = {},
			Nc = "lowpass highpass bandpass lowshelf highshelf peaking notch allpass".split(" ");
		s.prototype.wc = function(a) {
			this.N.disconnect();
			this.N.connect(a);
			this.M.disconnect();
			this.M.connect(a)
		};
		s.prototype.remove = function() {
			this.Y.disconnect();
			this.Oa.disconnect();
			this.N.disconnect();
			this.M.disconnect()
		};
		s.prototype.nc = aa("Y");
		r.prototype.wc = function(a) {
			this.N.disconnect();
			this.N.connect(a);
			this.M.disconnect();
			this.M.connect(a)
		};
		r.prototype.remove = function() {
			this.Y.disconnect();
			this.ah.disconnect();
			this.zc.disconnect();
			this.si.disconnect();
			this.N.disconnect();
			this.M.disconnect()
		};
		r.prototype.nc =
			aa("Y");
		n.prototype.wc = function(a) {
			this.N.disconnect();
			this.N.connect(a);
			this.M.disconnect();
			this.M.connect(a)
		};
		n.prototype.remove = function() {
			this.Y.disconnect();
			this.Ge.disconnect();
			this.N.disconnect();
			this.M.disconnect()
		};
		n.prototype.nc = aa("Y");
		q.prototype.wc = function(a) {
			this.M.disconnect();
			this.M.connect(a);
			this.N.disconnect();
			this.N.connect(a)
		};
		q.prototype.remove = function() {
			this.Y.disconnect();
			this.zc.disconnect();
			this.pb.disconnect();
			this.gc.disconnect();
			this.M.disconnect();
			this.N.disconnect();
			this.Bi.disconnect()
		};
		q.prototype.nc = aa("Y");
		p.prototype.wc = function(a) {
			this.M.disconnect();
			this.M.connect(a);
			this.N.disconnect();
			this.N.connect(a)
		};
		p.prototype.remove = function() {
			this.Y.disconnect();
			this.Oa.disconnect();
			this.pb.disconnect();
			this.gc.disconnect();
			this.M.disconnect();
			this.N.disconnect()
		};
		p.prototype.nc = aa("Y");
		v.prototype.wc = function(a) {
			this.ca.disconnect();
			this.ca.connect(a)
		};
		v.prototype.remove = function() {
			this.ca.disconnect()
		};
		v.prototype.nc = aa("ca");
		u.prototype.wc = function(a) {
			this.ca.disconnect();
			this.ca.connect(a)
		};
		u.prototype.remove = function() {
			this.pb.disconnect();
			this.gc.disconnect();
			this.ca.disconnect()
		};
		u.prototype.nc = aa("ca");
		f.prototype.wc = function(a) {
			this.N.disconnect();
			this.N.connect(a);
			this.M.disconnect();
			this.M.connect(a)
		};
		f.prototype.remove = function() {
			this.pb.disconnect();
			this.rh.disconnect();
			this.Y.disconnect();
			this.N.disconnect();
			this.M.disconnect()
		};
		f.prototype.nc = aa("Y");
		x.prototype.Ft = function(a, b) {
			0.01 > a && (a = 0.01);
			this.rj.gain.value = a;
			this.qj.gain.value = Math.pow(1 / a, 0.6) *
				b
		};
		x.prototype.shape = function(a, b, c) {
			var d = 1.05 * c * b - b;
			c = 0 > a ? -1 : 1;
			a = 0 > a ? -a : a;
			b = a < b ? a : b + d * (1 - Math.exp(-(1 / d) * (a - b)));
			return b * c
		};
		x.prototype.Wr = function(a, b) {
			for (var c = Math.pow(10, a / 20), d = Math.pow(10, b / 20), e = 0, f = 0; 32768 > f; ++f) e = f / 32768, e = this.shape(e, c, d), this.qi[32768 + f] = e, this.qi[32768 - f - 1] = -e
		};
		x.prototype.wc = function(a) {
			this.N.disconnect();
			this.N.connect(a);
			this.M.disconnect();
			this.M.connect(a)
		};
		x.prototype.remove = function() {
			this.Y.disconnect();
			this.rj.disconnect();
			this.Xj.disconnect();
			this.qj.disconnect();
			this.N.disconnect();
			this.M.disconnect()
		};
		x.prototype.nc = aa("Y");
		m.prototype.wc = function(a) {
			this.ca.disconnect();
			this.ca.connect(a)
		};
		m.prototype.remove = function() {
			this.ca.disconnect()
		};
		m.prototype.nc = aa("ca");
		w.prototype.fb = function() {
			this.ca.getFloatFrequencyData(this.Ur);
			this.ca.getByteTimeDomainData(this.rp);
			for (var a = this.ca.fftSize, b = 0, c = this.jh = 0, e = 0; b < a; b++) e = (this.rp[b] - 128) / 128, 0 > e && (e = -e), this.jh < e && (this.jh = e), c += e * e;
			this.jh = d(this.jh);
			d(Math.sqrt(c / a))
		};
		w.prototype.wc = function(a) {
			this.ca.disconnect();
			this.ca.connect(a)
		};
		w.prototype.remove = function() {
			this.ca.disconnect()
		};
		w.prototype.nc = aa("ca");
		l.prototype.uh = function(a) {
			if (this.U = a) this.Ui = this.U.x, this.Vi = this.U.y;
			this.se.length = 0
		};
		l.prototype.Ki = function() {
			return !!this.U
		};
		l.prototype.fb = function(a) {
			this.U && 0 !== a && (this.Il = Fa(this.Ui, this.Vi, this.U.x, this.U.y), a = Oa(this.Ui, this.Vi, this.U.x, this.U.y) / a, 4 > this.se.length || this.se.shift(), this.se.push(a), this.Ui = this.U.x, this.Vi = this.U.y)
		};
		l.prototype.Rn = function() {
			if (!this.se.length) return 0;
			var a,
				b, c = 0;
			a = 0;
			for (b = this.se.length; a < b; a++) c += this.se[a];
			return c / this.se.length
		};
		l.prototype.al = function() {
			return Math.cos(this.Il) * this.Rn()
		};
		l.prototype.bl = function() {
			return Math.sin(this.Il) * this.Rn()
		};
		var Dc = !1;
		t.prototype.Wq = function() {
			if (!this.Da && this.Xh) {
				var a = this;
				if (F.decodeAudioData) F.decodeAudioData(this.Xh, function(b) {
					a.Da = b;
					var c, d, e;
					if (fa(a.mj) || La) fa(a.mi) || (c = a.mi.Ge, c.normalize = a.Go, c.buffer = b);
					else if (a.Wf.length) {
						c = 0;
						for (d = a.Wf.length; c < d; c++) {
							b = a.Wf[c];
							e = new k(a, b.zp);
							e.nm(!0);
							if ("undefined" !==
								typeof b.Io && (b.U = z.Cg(b.Io), !b.U)) continue;
							if (b.U) {
								var f = Ka(b.U.x, b.U.y, -b.U.q.kb(), Wa, Xa, !0),
									g = Ka(b.U.x, b.U.y, -b.U.q.kb(), Wa, Xa, !1);
								e.mm(f, g, Aa(b.U.n - b.U.q.kb()), b.fl, b.Ll, b.Ol);
								e.uh(b.U)
							} else e.mm(b.x, b.y, b.Aq, b.fl, b.Ll, b.Ol);
							e.play(a.Dl, a.Gm, a.Cj);
							a.kj && e.pause();
							R.push(e)
						}
						a.Wf.length = 0
					} else e = new k(a, a.mj), e.play(a.Dl, a.Gm, a.Cj), a.kj && e.pause(), R.push(e)
				});
				else if (this.Da = F.createBuffer(this.Xh, !1), fa(this.mj) || La) fa(this.mi) || (b = this.mi.Ge, b.normalize = this.Go, b.buffer = this.Da);
				else {
					var b = new k(this,
						this.mj);
					b.play(this.Dl, this.Gm, this.Cj);
					this.kj && b.pause();
					R.push(b)
				}
			}
		};
		k.prototype.Hg = function() {
			switch (this.ta) {
				case J:
					return this.u.ended;
				case C:
					return this.buffer.ta === C ? !this.ee && !this.Kc && this.u.loop || this.Hd ? !1 : z.rc.aa - this.startTime > this.buffer.Da.duration : this.u.ended;
				case D:
					return this.Vl;
				case P:
					!0
			}
			return !0
		};
		k.prototype.Oq = function() {
			return this.ee || this.Kc ? !0 : this.Hg()
		};
		k.prototype.nm = function(a) {
			O === C && (!this.ld && a ? this.jb && (this.Ja || (this.Ja = F.createPanner(), this.Ja.panningModel = "number" ===
				typeof this.Ja.panningModel ? Fb : ["equalpower", "HRTF", "soundfield"][Fb], this.Ja.distanceModel = "number" === typeof this.Ja.distanceModel ? Gb : ["linear", "inverse", "exponential"][Gb], this.Ja.refDistance = Ac, this.Ja.maxDistance = Bc, this.Ja.rolloffFactor = Cc), this.jb.disconnect(), this.jb.connect(this.Ja), this.Ja.connect(g(this.te)), this.ld = !0) : this.ld && !a && this.jb && (this.Ja.disconnect(), this.jb.disconnect(), this.jb.connect(g(this.te)), this.ld = !1))
		};
		k.prototype.mm = function(a, b, c, d, e, f) {
			this.ld && O === C && (this.Ja.setPosition(a,
				b, 0), this.Ja.setOrientation(Math.cos(E(c)), Math.sin(E(c)), 0), this.Ja.coneInnerAngle = d, this.Ja.coneOuterAngle = e, this.Ja.coneOuterGain = f, this.Uo = a, this.Vo = b, this.Qo = c, this.Ro = d, this.So = e, this.To = f)
		};
		k.prototype.uh = function(a) {
			this.ld && O === C && (this.Ia || (this.Ia = new l), this.Ia.uh(a))
		};
		k.prototype.fb = function(a) {
			if (this.ld && O === C && this.Ia && this.Ia.Ki() && this.Ff()) {
				this.Ia.fb(a);
				a = this.Ia.U;
				var b = Ka(a.x, a.y, -a.q.kb(), Wa, Xa, !0),
					c = Ka(a.x, a.y, -a.q.kb(), Wa, Xa, !1);
				this.Ja.setPosition(b, c, 0);
				b = 0;
				"undefined" !==
				typeof this.Ia.U.n && (b = a.n - a.q.kb(), this.Ja.setOrientation(Math.cos(b), Math.sin(b), 0));
				b = Ka(this.Ia.al(), this.Ia.bl(), -a.q.kb(), 0, 0, !0);
				c = Ka(this.Ia.al(), this.Ia.bl(), -a.q.kb(), 0, 0, !1);
				this.Ja.setVelocity(b, c, 0)
			}
		};
		k.prototype.play = function(b, c, d) {
			var f = this.u;
			this.Kd = b;
			this.volume = c;
			d = d || 0;
			switch (this.ta) {
				case J:
					1 !== f.playbackRate && (f.playbackRate = 1);
					f.volume !== c * Ma && (f.volume = c * Ma);
					f.loop !== b && (f.loop = b);
					f.muted && (f.muted = !1);
					if (f.currentTime !== d) try {
						f.currentTime = d
					} catch (g) {}
					if (this.Vc && cb && !z.kd) db.push(this);
					else try {
						this.u.play()
					} catch (k) {}
					break;
				case C:
					this.muted = !1;
					this.bh = 1;
					if (this.buffer.ta === C) this.ee || (this.u = F.createBufferSource(), this.u.buffer = this.buffer.Da, this.u.connect(this.jb)), this.u.loop = b, this.jb.gain.value = c * Ma, 0 === d ? a(this.u) : e(this.u, d, this.Oe());
					else {
						1 !== f.playbackRate && (f.playbackRate = 1);
						f.loop !== b && (f.loop = b);
						this.jb.gain.value = c * Ma;
						if (f.currentTime !== d) try {
							f.currentTime = d
						} catch (l) {}
						this.Vc && cb && !z.kd ? db.push(this) : f.play()
					}
					break;
				case D:
					(!this.ee && this.Kc || 0 !== d) && f.seekTo(d);
					f.play();
					this.Vl = !1;
					break;
				case P:
					z.Qb ? AppMobi.context.playSound(this.src, b) : AppMobi.player.playSound(this.src, b)
			}
			this.playbackRate = 1;
			this.startTime = z.rc.aa - d;
			this.Hd = this.Kc = this.ee = !1
		};
		k.prototype.stop = function() {
			switch (this.ta) {
				case J:
					this.u.paused || this.u.pause();
					break;
				case C:
					this.buffer.ta === C ? h(this.u) : this.u.paused || this.u.pause();
					break;
				case D:
					this.u.stop();
					break;
				case P:
					z.Qb && AppMobi.context.stopSound(this.src)
			}
			this.Kc = !0;
			this.Hd = !1
		};
		k.prototype.pause = function() {
			if (!(this.ee || this.Kc || this.Hg() || this.Hd)) {
				switch (this.ta) {
					case J:
						this.u.paused ||
							this.u.pause();
						break;
					case C:
						this.buffer.ta === C ? (this.ad = this.Zk(), this.Kd && (this.ad %= this.Oe()), h(this.u)) : this.u.paused || this.u.pause();
						break;
					case D:
						this.u.pause();
						break;
					case P:
						z.Qb && AppMobi.context.stopSound(this.src)
				}
				this.Hd = !0
			}
		};
		k.prototype.ot = function(a) {
			this.ta === C && (this.ld ? (this.Ja.disconnect(), this.Ja.connect(a)) : (this.jb.disconnect(), this.jb.connect(a)))
		};
		k.prototype.Oe = function() {
			switch (this.ta) {
				case J:
					if ("undefined" !== typeof this.u.duration) return this.u.duration;
					break;
				case C:
					return this.buffer.Da.duration;
				case D:
					return this.u.getDuration();
				case P:
					if (z.Qb) return AppMobi.context.getDurationSound(this.src)
			}
			return 0
		};
		k.prototype.Zk = function() {
			var a = this.Oe(),
				b = 0;
			switch (this.ta) {
				case J:
					"undefined" !== typeof this.u.currentTime && (b = this.u.currentTime);
					break;
				case C:
					if (this.buffer.ta === C) {
						if (this.Hd) return this.ad;
						b = z.rc.aa - this.startTime
					} else "undefined" !== typeof this.u.currentTime && (b = this.u.currentTime);
					break;
				case P:
					z.Qb && (b = AppMobi.context.getPlaybackTimeSound(this.src))
			}!this.Kd && b > a && (b = a);
			return b
		};
		k.prototype.Ff =
			function() {
				return !this.Hd && !this.ee && !this.Kc && !this.Hg()
			};
		k.prototype.Vt = function() {
			var a = this.volume * Ma;
			switch (this.ta) {
				case J:
					this.u.volume && this.u.volume !== a && (this.u.volume = a);
					break;
				case C:
					this.jb.gain.value = a * this.bh
			}
		};
		k.prototype.vi = function(a) {
			switch (this.ta) {
				case J:
					this.u.muted !== !!a && (this.u.muted = !!a);
					break;
				case C:
					this.bh = a ? 0 : 1, this.jb.gain.value = Ma * this.volume * this.bh
			}
		};
		k.prototype.Ht = function() {
			this.If = !0;
			this.vi(this.If || this.Og)
		};
		k.prototype.lp = function(a) {
			this.Og = !!a;
			this.vi(this.If ||
				this.Og)
		};
		k.prototype.Kp = function() {
			var a = this.playbackRate;
			if (1 === rb && !this.Vc || 2 === rb) a *= z.cg;
			switch (this.ta) {
				case J:
					this.u.playbackRate !== a && (this.u.playbackRate = a);
					break;
				case C:
					this.buffer.ta === C ? this.u.playbackRate.value !== a && (this.u.playbackRate.value = a) : this.u.playbackRate !== a && (this.u.playbackRate = a)
			}
		};
		k.prototype.Jt = function(a) {
			switch (this.ta) {
				case J:
					a ? this.Ff() ? (this.u.pause(), this.Md = !0) : this.Md = !1 : this.Md && this.u.play();
					break;
				case C:
					a ? this.Ff() ? (this.buffer.ta === C ? (this.ad = this.Zk(), this.Kd &&
						(this.ad %= this.Oe()), h(this.u)) : this.u.pause(), this.Md = !0) : this.Md = !1 : this.Md && (this.buffer.ta === C ? (this.u = F.createBufferSource(), this.u.buffer = this.buffer.Da, this.u.connect(this.jb), this.u.loop = this.Kd, this.jb.gain.value = Ma * this.volume * this.bh, this.startTime = z.rc.aa - this.ad, e(this.u, this.ad, this.Oe())) : this.u.play());
					break;
				case D:
					a ? this.Ff() ? (this.u.pause(), this.Md = !0) : this.Md = !1 : this.Md && this.u.play()
			}
		};
		K.ya = function(b) {
			this.type = b;
			z = this.b = b.b;
			M = this;
			this.Ib = null;
			this.Ug = -600;
			!(this.b.Ti || this.b.Oi &&
				(this.b.Lg || this.b.co)) || this.b.Pi || this.b.lb || (cb = !0);
			F = null;
			"undefined" !== typeof AudioContext ? (O = C, F = new AudioContext) : "undefined" !== typeof webkitAudioContext && (O = C, F = new webkitAudioContext);
			(this.b.Ti && O === C || cb) && document.addEventListener("touchstart", function() {
				var b, c, d;
				!Dc && F && (b = F.createBuffer(1, 1, 22050), c = F.createBufferSource(), c.buffer = b, c.connect(F.destination), a(c), Dc = !0);
				if (cb) {
					if (!La)
						for (b = 0, c = db.length; b < c; ++b) d = db[b], d.Kc || d.Hd || d.u.play();
					db.length = 0
				}
			}, !0);
			O !== C && (this.b.Uc && "undefined" !==
				typeof window.Media ? O = D : this.b.Ef && (O = P));
			O === D && (L = location.href, b = L.lastIndexOf("/"), -1 < b && (L = L.substr(0, b + 1)), L = L.replace("file://", ""));
			if (this.b.fo && this.b.Ks && "undefined" === typeof Audio) alert("It looks like you're using Safari for Windows without Quicktime.  Audio cannot be played until Quicktime is installed."), this.b.Qd(this);
			else {
				if (this.b.Qb) qb = this.b.Oi;
				else try {
					qb = !!(new Audio).canPlayType('audio/ogg; codecs="vorbis"')
				} catch (c) {
					qb = !1
				}
				this.b.wm(this)
			}
		};
		var Na = K.ya.prototype;
		Na.da = function() {
			rb =
				this.D[0];
			this.Nd = this.D[1];
			Fb = this.D[2];
			Gb = this.D[3];
			this.Ug = -this.D[4];
			Ac = this.D[5];
			Bc = this.D[6];
			Cc = this.D[7];
			this.Ib = new l;
			O === C && (F.listener.speedOfSound = this.D[8], F.listener.dopplerFactor = this.D[9], F.listener.setPosition(this.b.W / 2, this.b.V / 2, this.Ug), F.listener.setOrientation(0, 0, 1, 0, -1, 0), window.c2OnAudioMicStream = function(a, b) {
				Ua && Ua.disconnect();
				Eb = b.toLowerCase();
				Ua = F.createMediaStreamSource(a);
				Ua.connect(g(Eb))
			});
			this.b.Fq(function(a) {
				M.ct(a)
			});
			var a = this;
			this.b.pk(function(b) {
				a.Pl(b)
			})
		};
		Na.Pl = function(a) {
			var b, c, d;
			b = 0;
			for (c = R.length; b < c; b++) d = R[b], d.Ia && d.Ia.U === a && (d.Ia.U = null, d.ld && d.Ff() && d.Kd && d.stop());
			this.Ib.U === a && (this.Ib.U = null)
		};
		Na.Bb = function() {
			var a = {
					silent: La,
					masterVolume: Ma,
					listenerZ: this.Ug,
					listenerUid: this.Ib.Ki() ? this.Ib.U.uid : -1,
					playing: [],
					effects: {}
				},
				b = a.playing,
				c, d, e, f, g, k;
			c = 0;
			for (d = R.length; c < d; c++) e = R[c], !e.Ff() || 3 === this.Nd || e.Vc && 1 === this.Nd || !e.Vc && 2 === this.Nd || (f = e.Zk(), e.Kd && (f %= e.Oe()), f = {
				tag: e.te,
				buffersrc: e.buffer.src,
				is_music: e.Vc,
				playbackTime: f,
				volume: e.volume,
				looping: e.Kd,
				muted: e.If,
				playbackRate: e.playbackRate,
				paused: e.Hd,
				resume_position: e.ad
			}, e.ld && (f.pan = {}, k = f.pan, e.Ia && e.Ia.Ki() ? k.objUid = e.Ia.U.uid : (k.x = e.Uo, k.y = e.Vo, k.a = e.Qo), k.ia = e.Ro, k.oa = e.So, k.og = e.To), b.push(f));
			b = a.effects;
			for (g in X)
				if (X.hasOwnProperty(g)) {
					e = [];
					c = 0;
					for (d = X[g].length; c < d; c++) e.push({
						type: X[g][c].type,
						params: X[g][c].Yc
					});
					b[g] = e
				}
			return a
		};
		var eb = [];
		Na.Rb = function(a) {
			var b = a.silent;
			Ma = a.masterVolume;
			this.Ug = a.listenerZ;
			this.Ib.uh(null);
			var c = a.listenerUid; - 1 !== c && (this.Ib.aj = c,
				eb.push(this.Ib));
			var c = a.playing,
				d, e, g, k, h, t, H, K, G, y, z;
			if (3 !== this.Nd)
				for (d = 0, e = R.length; d < e; d++) G = R[d], G.Vc && 1 === this.Nd || (G.Vc || 2 !== this.Nd) && G.stop();
			for (h in X)
				if (X.hasOwnProperty(h))
					for (d = 0, e = X[h].length; d < e; d++) X[h][d].remove();
			Ra(X);
			for (h in a.effects)
				if (a.effects.hasOwnProperty(h))
					for (t = a.effects[h], d = 0, e = t.length; d < e; d++) switch (g = t[d].type, y = t[d].params, g) {
						case "filter":
							I(h, new s(y[0], y[1], y[2], y[3], y[4], y[5]));
							break;
						case "delay":
							I(h, new r(y[0], y[1], y[2]));
							break;
						case "convolve":
							g = y[2];
							G =
								this.Tk(g, !1);
							G.Da ? g = new n(G.Da, y[0], y[1], g) : (g = new n(null, y[0], y[1], g), G.Go = y[0], G.mi = g);
							I(h, g);
							break;
						case "flanger":
							I(h, new q(y[0], y[1], y[2], y[3], y[4]));
							break;
						case "phaser":
							I(h, new p(y[0], y[1], y[2], y[3], y[4], y[5]));
							break;
						case "gain":
							I(h, new v(y[0]));
							break;
						case "tremolo":
							I(h, new u(y[0], y[1]));
							break;
						case "ringmod":
							I(h, new f(y[0], y[1]));
							break;
						case "distortion":
							I(h, new x(y[0], y[1], y[2], y[3], y[4]));
							break;
						case "compressor":
							I(h, new m(y[0], y[1], y[2], y[3], y[4]));
							break;
						case "analyser":
							I(h, new w(y[0], y[1]))
					}
				d =
			0;
			for (e = c.length; d < e; d++) 3 === this.Nd || (a = c[d], g = a.buffersrc, k = a.is_music, h = a.tag, t = a.playbackTime, H = a.looping, K = a.volume, z = (y = a.pan) && y.hasOwnProperty("objUid") ? y.objUid : -1, k && 1 === this.Nd) || !k && 2 === this.Nd || ((G = this.Jn(g, h, k, H, K)) ? (G.ad = a.resume_position, G.nm(!!y), G.play(H, K, t), G.Kp(), G.Vt(), G.vi(G.If || G.Og), a.paused && G.pause(), a.muted && G.Ht(), G.vi(G.If || G.Og), y && (-1 !== z ? (G.Ia = G.Ia || new l, G.Ia.aj = z, eb.push(G.Ia)) : G.mm(y.x, y.y, y.a, y.ia, y.oa, y.og))) : (G = this.Tk(g, k), G.Cj = t, G.kj = a.paused, y && (-1 !== z ? G.Wf.push({
				Io: z,
				fl: y.ia,
				Ll: y.oa,
				Ol: y.og,
				zp: h
			}) : G.Wf.push({
				x: y.x,
				y: y.y,
				Aq: y.a,
				fl: y.ia,
				Ll: y.oa,
				Ol: y.og,
				zp: h
			}))));
			if (b && !La) {
				d = 0;
				for (e = R.length; d < e; d++) R[d].lp(!0);
				La = !0
			} else if (!b && La) {
				d = 0;
				for (e = R.length; d < e; d++) R[d].lp(!1);
				La = !1
			}
		};
		Na.ed = function() {
			var a, b, c, d;
			a = 0;
			for (b = eb.length; a < b; a++) c = eb[a], d = this.b.Cg(c.aj), c.uh(d), c.aj = -1, d && (Wa = d.x, Xa = d.y);
			eb.length = 0
		};
		Na.ct = function(a) {
			var b, c;
			b = 0;
			for (c = R.length; b < c; b++) R[b].Jt(a)
		};
		Na.fb = function() {
			var a = this.b.Je,
				b, c, d;
			b = 0;
			for (c = R.length; b < c; b++) d = R[b], d.fb(a), d.ta === J ||
				d.ta === P || d.ee || d.Kc || !d.Hg() || (d.Kc = !0, N = d.te, z.trigger(kc.prototype.p.dk, M)), 0 !== rb && d.Kp();
			var e, f;
			for (e in X)
				if (X.hasOwnProperty(e))
					for (d = X[e], b = 0, c = d.length; b < c; b++) f = d[b], f.fb && f.fb();
			O === C && this.Ib.Ki() && (this.Ib.fb(a), Wa = this.Ib.U.x, Xa = this.Ib.U.y, F.listener.setPosition(this.Ib.U.x, this.Ib.U.y, this.Ug), F.listener.setVelocity(this.Ib.al(), this.Ib.bl(), 0))
		};
		Na.Tk = function(a, b) {
			var c, d, e, f = null;
			c = 0;
			for (d = W.length; c < d; c++)
				if (e = W[c], e.src === a) {
					f = e;
					break
				}
			f || (f = new t(a, b), W.push(f));
			return f
		};
		Na.Jn =
			function(a, b, c, d, e) {
				var f, g, l;
				f = 0;
				for (g = R.length; f < g; f++)
					if (l = R[f], l.src === a && (l.Oq() || c)) return l.te = b, l;
				a = this.Tk(a, c);
				if (!a.Da) return "<preload>" !== b && (a.mj = b, a.Dl = d, a.Gm = e), null;
				l = new k(a, b);
				R.push(l);
				return l
			};
		var Ga = [];
		G.prototype.dk = function(a) {
			return gb(N, a)
		};
		K.p = new G;
		ba.prototype.Play = function(a, b, c, d) {
			!La && (c = Math.pow(10, c / 20), 0 > c && (c = 0), 1 < c && (c = 1), Va = this.Jn(this.b.Fn + a[0] + (qb ? ".ogg" : ".m4a"), d, a[1], 0 !== b, c)) && (Va.nm(!1), Va.play(0 !== b, c))
		};
		ba.prototype.Qh = function(a) {
			H(a);
			var b;
			a = 0;
			for (b =
				Ga.length; a < b; a++) Ga[a].stop()
		};
		K.k = new ba;
		y.prototype.Lm = function(a, b) {
			H(b);
			Ga.length ? a.F(Ga[0].Oe()) : a.F(0)
		};
		K.J = new y
	})();

function S(d) {
		this.b = d
	}
	(function() {
		function d() {
			if (0 === this.Gk.length) {
				var a = document.createElement("canvas");
				a.width = this.width;
				a.height = this.height;
				var b = a.getContext("2d");
				this.$f ? b.drawImage(this.H, this.Tf, this.Uf, this.width, this.height, 0, 0, this.width, this.height) : b.drawImage(this.H, 0, 0, this.width, this.height);
				this.Gk = a.toDataURL("image/png")
			}
			return this.Gk
		}

		function g() {}

		function b(a) {
			a[0] = 0;
			a[1] = 0;
			a[2] = 0;
			u.push(a)
		}

		function c(a, b) {
			return a < b ? "" + a + "," + b : "" + b + "," + a
		}

		function a(a, b, d, e) {
			b = b.uid;
			d = d.uid;
			var f = c(b, d);
			if (a.hasOwnProperty(f)) a[f][2] =
				e;
			else {
				var g = u.length ? u.pop() : [0, 0, 0];
				g[0] = b;
				g[1] = d;
				g[2] = e;
				a[f] = g
			}
		}

		function e(a, d, e) {
			d = c(d.uid, e.uid);
			a.hasOwnProperty(d) && (b(a[d]), delete a[d])
		}

		function h(a, b, d) {
			b = c(b.uid, d.uid);
			if (a.hasOwnProperty(b)) return f = a[b][2], !0;
			f = -2;
			return !1
		}

		function s() {}

		function r() {}
		var n = S.prototype;
		n.Fa = function(a) {
			this.Ea = a;
			this.b = a.b
		};
		var q = n.Fa.prototype;
		q.da = function() {
			if (!this.K) {
				var a, b, c, e, f, g, h, p, m;
				this.Qc = [];
				this.Li = !1;
				a = 0;
				for (b = this.Vb.length; a < b; a++) {
					f = this.Vb[a];
					h = {};
					h.name = f[0];
					h.speed = f[1];
					h.loop = f[2];
					h.em = f[3];
					h.zj = f[4];
					h.ef = f[5];
					h.X = f[6];
					h.frames = [];
					c = 0;
					for (e = f[7].length; c < e; c++) g = f[7][c], p = {}, p.Lj = g[0], p.vm = g[1], p.Tf = g[2], p.Uf = g[3], p.width = g[4], p.height = g[5], p.duration = g[6], p.Eb = g[7], p.Fb = g[8], p.gl = g[9], p.oj = g[10], p.Yo = g[11], p.$f = 0 !== p.width, p.Gk = "", p.sv = d, m = {
						left: 0,
						top: 0,
						right: 1,
						bottom: 1
					}, p.pm = m, p.P = null, (m = this.b.Tr(g[0])) ? p.H = m : (p.H = new Image, p.H.idtkLoadDisposed = !0, p.H.src = g[0], p.H.Tq = g[0], p.H.sn = g[1], p.H.Mq = null, this.b.Hm(p.H)), h.frames.push(p), this.Qc.push(p);
					this.Vb[a] = h
				}
			}
		};
		q.Ut = function() {
			var a,
				b, c;
			a = 0;
			for (b = this.i.length; a < b; a++) c = this.i[a], c.pi = c.xc.P
		};
		q.fj = function() {
			if (!this.K) {
				var a, b, c;
				a = 0;
				for (b = this.Qc.length; a < b; ++a) c = this.Qc[a], c.H.Mq = null, c.P = null
			}
		};
		q.hj = function() {
			if (!this.K && this.i.length) {
				var a, b, c;
				a = 0;
				for (b = this.Qc.length; a < b; ++a) c = this.Qc[a], c.P = this.b.C.Lf(c.H, !1, this.b.ba, c.Yo);
				this.Ut()
			}
		};
		q.yl = function() {
			if (!this.K && !this.Li && this.b.C) {
				var a, b, c;
				a = 0;
				for (b = this.Qc.length; a < b; ++a) c = this.Qc[a], c.P = this.b.C.Lf(c.H, !1, this.b.ba, c.Yo);
				this.Li = !0
			}
		};
		q.Uj = function() {
			if (!this.K &&
				!this.i.length && this.Li) {
				var a, b, c;
				a = 0;
				for (b = this.Qc.length; a < b; ++a) c = this.Qc[a], this.b.C.deleteTexture(c.P), c.P = null;
				this.Li = !1
			}
		};
		var p = [];
		q.sj = function(a) {
			var b, c, d;
			b = p.length = 0;
			for (c = this.Qc.length; b < c; ++b) d = this.Qc[b].H, -1 === p.indexOf(d) && (a.drawImage(d, 0, 0), p.push(d))
		};
		n.ya = function(a) {
			this.type = a;
			this.b = a.b;
			a = this.type.Vb[0].frames[0].oj;
			this.uc ? this.ja.wh(a) : this.ja = new Za(a)
		};
		var v = n.ya.prototype;
		v.da = function() {
			this.visible = 0 === this.D[0];
			this.hl = this.ol = !1;
			this.xd = 0 !== this.D[3];
			1 === this.type.Vb.length &&
				1 === this.type.Vb[0].frames.length || 0 === this.type.Vb[0].speed || (this.b.wm(this), this.ol = !0);
			this.Ga = this.In(this.D[1]) || this.type.Vb[0];
			this.G = this.D[2];
			0 > this.G && (this.G = 0);
			this.G >= this.Ga.frames.length && (this.G = this.Ga.frames.length - 1);
			var a = this.Ga.frames[this.G];
			this.ja.wh(a.oj);
			this.Eb = a.Eb;
			this.Fb = a.Fb;
			this.sg = this.Ga.speed;
			this.uc ? this.fd.reset() : this.fd = new Ta;
			this.Dd = this.fd.aa;
			this.De = !0;
			this.vd = 0;
			this.Ce = !0;
			this.yk = this.hn = "";
			this.Rq = 0;
			this.ei = -1;
			this.type.yl();
			var b, c, d, e, f, g, h, a = 0;
			for (b =
				this.type.Vb.length; a < b; a++)
				for (e = this.type.Vb[a], c = 0, d = e.frames.length; c < d; c++) f = e.frames[c], 0 === f.width && (f.width = f.H.width, f.height = f.H.height), f.$f && (h = f.H, g = f.pm, g.left = f.Tf / h.width, g.top = f.Uf / h.height, g.right = (f.Tf + f.width) / h.width, g.bottom = (f.Uf + f.height) / h.height, 0 === f.Tf && 0 === f.Uf && f.width === h.width && f.height === h.height && (f.$f = !1));
			this.xc = this.Ga.frames[this.G];
			this.pi = this.xc.P
		};
		v.Bb = function() {
			var a = {
				a: this.Ga.X,
				f: this.G,
				cas: this.sg,
				fs: this.Dd,
				ar: this.vd,
				at: this.fd.aa
			};
			this.De || (a.ap =
				this.De);
			this.Ce || (a.af = this.Ce);
			return a
		};
		v.Rb = function(a) {
			var b = this.Xr(a.a);
			b && (this.Ga = b);
			this.G = a.f;
			0 > this.G && (this.G = 0);
			this.G >= this.Ga.frames.length && (this.G = this.Ga.frames.length - 1);
			this.sg = a.cas;
			this.Dd = a.fs;
			this.vd = a.ar;
			this.fd.reset();
			this.fd.aa = a.at;
			this.De = a.hasOwnProperty("ap") ? a.ap : !0;
			this.Ce = a.hasOwnProperty("af") ? a.af : !0;
			this.xc = this.Ga.frames[this.G];
			this.pi = this.xc.P;
			this.ja.wh(this.xc.oj);
			this.Eb = this.xc.Eb;
			this.Fb = this.xc.Fb
		};
		v.tk = function(a) {
			this.G = a ? 0 : this.Ga.frames.length -
				1;
			this.De = !1;
			this.hn = this.Ga.name;
			this.hl = !0;
			this.b.trigger(S.prototype.p.Zp, this);
			this.b.trigger(S.prototype.p.Yp, this);
			this.hl = !1;
			this.vd = 0
		};
		v.uv = function() {
			return this.fd.aa
		};
		v.fb = function() {
			this.fd.add(this.b.Af(this));
			this.yk.length && this.Zq();
			0 <= this.ei && this.xn();
			var a = this.fd.aa,
				b = this.Ga,
				c = b.frames[this.G],
				d = c.duration / this.sg;
			this.De && a >= this.Dd + d && (this.Ce ? this.G++ : this.G--, this.Dd += d, this.G >= b.frames.length && (b.ef ? (this.Ce = !1, this.G = b.frames.length - 2) : b.loop ? this.G = b.zj : (this.vd++, this.vd >=
				b.em ? this.tk(!1) : this.G = b.zj)), 0 > this.G && (b.ef ? (this.G = 1, this.Ce = !0, b.loop || (this.vd++, this.vd >= b.em && this.tk(!0))) : b.loop ? this.G = b.zj : (this.vd++, this.vd >= b.em ? this.tk(!0) : this.G = b.zj)), 0 > this.G ? this.G = 0 : this.G >= b.frames.length && (this.G = b.frames.length - 1), a > this.Dd + b.frames[this.G].duration / this.sg && (this.Dd = a), a = b.frames[this.G], this.tf(c, a), this.b.ha = !0)
		};
		v.In = function(a) {
			var b, c, d;
			b = 0;
			for (c = this.type.Vb.length; b < c; b++)
				if (d = this.type.Vb[b], gb(d.name, a)) return d;
			return null
		};
		v.Xr = function(a) {
			var b,
				c, d;
			b = 0;
			for (c = this.type.Vb.length; b < c; b++)
				if (d = this.type.Vb[b], d.X === a) return d;
			return null
		};
		v.Zq = function() {
			var a = this.Ga.frames[this.G],
				b = this.In(this.yk);
			this.yk = "";
			!b || gb(b.name, this.Ga.name) && this.De || (this.Ga = b, this.sg = b.speed, 0 > this.G && (this.G = 0), this.G >= this.Ga.frames.length && (this.G = this.Ga.frames.length - 1), 1 === this.Rq && (this.G = 0), this.De = !0, this.Dd = this.fd.aa, this.Ce = !0, this.tf(a, this.Ga.frames[this.G]), this.b.ha = !0)
		};
		v.xn = function() {
			var a = this.Ga.frames[this.G],
				b = this.G;
			this.G = pa(this.ei);
			0 > this.G && (this.G = 0);
			this.G >= this.Ga.frames.length && (this.G = this.Ga.frames.length - 1);
			b !== this.G && (this.tf(a, this.Ga.frames[this.G]), this.Dd = this.fd.aa, this.b.ha = !0);
			this.ei = -1
		};
		v.tf = function(a, b) {
			var c = a.width,
				d = a.height,
				e = b.width,
				f = b.height;
			c != e && (this.width *= e / c);
			d != f && (this.height *= f / d);
			this.Eb = b.Eb;
			this.Fb = b.Fb;
			this.ja.wh(b.oj);
			this.ea();
			this.xc = b;
			this.pi = b.P;
			c = 0;
			for (d = this.S.length; c < d; c++) e = this.S[c], e.bt && e.bt(a, b);
			this.b.trigger(S.prototype.p.tf, this)
		};
		v.Ad = function(a) {
			a.globalAlpha = this.opacity;
			var b = this.xc,
				c = b.$f,
				d = b.H,
				e = this.x,
				f = this.y,
				g = this.width,
				h = this.height;
			if (0 === this.n && 0 <= g && 0 <= h) e -= this.Eb * g, f -= this.Fb * h, this.b.md && (e = e + 0.5 | 0, f = f + 0.5 | 0), c ? a.drawImage(d, b.Tf, b.Uf, b.width, b.height, e, f, g, h) : a.drawImage(d, e, f, g, h);
			else {
				this.b.md && (e = e + 0.5 | 0, f = f + 0.5 | 0);
				a.save();
				var p = 0 < g ? 1 : -1,
					m = 0 < h ? 1 : -1;
				a.translate(e, f);
				1 === p && 1 === m || a.scale(p, m);
				a.rotate(this.n * p * m);
				e = 0 - this.Eb * ka(g);
				f = 0 - this.Fb * ka(h);
				c ? a.drawImage(d, b.Tf, b.Uf, b.width, b.height, e, f, ka(g), ka(h)) : a.drawImage(d, e, f, ka(g), ka(h));
				a.restore()
			}
		};
		v.Ac = function(a) {
			a.hc(this.pi);
			a.gf(this.opacity);
			var b = this.xc,
				c = this.Wb;
			if (this.b.md) {
				var d = (this.x + 0.5 | 0) - this.x,
					e = (this.y + 0.5 | 0) - this.y;
				b.$f ? a.nd(c.Aa + d, c.Ba + e, c.gb + d, c.hb + e, c.Ua + d, c.Va + e, c.Sa + d, c.Ta + e, b.pm) : a.wj(c.Aa + d, c.Ba + e, c.gb + d, c.hb + e, c.Ua + d, c.Va + e, c.Sa + d, c.Ta + e)
			} else b.$f ? a.nd(c.Aa, c.Ba, c.gb, c.hb, c.Ua, c.Va, c.Sa, c.Ta, b.pm) : a.wj(c.Aa, c.Ba, c.gb, c.hb, c.Ua, c.Va, c.Sa, c.Ta)
		};
		v.$r = function(a) {
			var b = this.xc,
				c, d;
			c = 0;
			for (d = b.gl.length; c < d; c++)
				if (gb(a, b.gl[c][0])) return c;
			return -1
		};
		v.Gi = function(a,
			b) {
			var c = this.xc,
				d = c.gl,
				e;
			e = ha(a) ? this.$r(a) : a - 1;
			e = pa(e);
			if (0 > e || e >= d.length) return b ? this.x : this.y;
			var f = (d[e][1] - c.Eb) * this.width,
				d = d[e][2],
				d = (d - c.Fb) * this.height,
				c = Math.cos(this.n);
			e = Math.sin(this.n);
			var g = f * c - d * e,
				d = d * c + f * e,
				f = g + this.x,
				d = d + this.y;
			return b ? f : d
		};
		var u = [],
			f = -2,
			x = [];
		g.prototype.aq = function(c) {
			if (!c) return !1;
			var d = this.b,
				g = d.Fi(),
				p = g.type;
			g.T.Ak || (g.T.Ak = {}, d.pk(function(a) {
				return function(c) {
					c = c.uid;
					var d, e;
					for (d in a) a.hasOwnProperty(d) && (e = a[d], e[0] === c || e[1] === c) && (b(a[d]), delete a[d])
				}
			}(g.T.Ak)));
			var g = g.T.Ak,
				m = p.ga(),
				n = c.ga(),
				m = m.Cc(),
				q, r, s, v, u, w, L, J = this.b.nf,
				C = J - 1,
				D = d.Ab().$b;
			for (r = 0; r < m.length; r++) {
				s = m[r];
				n.qa ? (s.La(), this.b.Kn(s.q, c, s.Ra, x), q = x) : q = n.Cc();
				for (v = 0; v < q.length; v++) u = q[v], d.kf(s, u) || d.Sq(s, u) ? (w = h(g, s, u), w = !w || f < C, a(g, s, u, J), w && (d.uj(D.xa), w = p.ga(), L = c.ga(), w.qa = !1, L.qa = !1, p === c ? (w.i.length = 2, w.i[0] = s, w.i[1] = u, p.Rc()) : (w.i.length = 1, L.i.length = 1, w.i[0] = s, L.i[0] = u, p.Rc(), c.Rc()), D.ut(), d.ff(D.xa))) : e(g, s, u);
				x.length = 0
			}
			return !1
		};
		var m = new da,
			w = !1;
		q.finish = function(a) {
			if (w) {
				if (a) {
					var b =
						this.b.Ab().$b.Xc;
					a = null.ga();
					var c = m.fg(),
						d, e;
					if (a.qa) {
						a.qa = !1;
						a.i.length = c.length;
						d = 0;
						for (e = c.length; d < e; d++) a.i[d] = c[d];
						if (b)
							for (d = a.ka.length = 0, e = null.i.length; d < e; d++) c = null.i[d], m.contains(c) || a.ka.push(c)
					} else if (b)
						for (b = a.i.length, a.i.length = b + c.length, d = 0, e = c.length; d < e; d++) a.i[b + d] = c[d], za(a.ka, c[d]);
					else wa(a.i, c);
					null.Rc()
				}
				m.clear();
				w = !1
			}
		};
		g.prototype.qf = function(a, b) {
			return $b(this.G, a, b)
		};
		g.prototype.Yp = function(a) {
			return gb(this.hn, a)
		};
		g.prototype.Zp = B(!0);
		g.prototype.tf = B(!0);
		n.p =
			new g;
		s.prototype.rq = function(a) {
			this.ei = a;
			this.ol || (this.b.wm(this), this.ol = !0);
			this.hl || this.xn()
		};
		n.k = new s;
		r.prototype.Mm = function(a, b) {
			a.F(this.Gi(b, !1))
		};
		n.J = new r
	})();

function lc(d) {
		this.b = d
	}
	(function() {
		function d(a, b, c) {
			if (c) {
				var d;
				c = 0;
				for (d = b.length; c < d; c++) a.length < e && a.push(b[c]);
				b.length = 0
			} else
				for (d in b) Object.prototype.hasOwnProperty.call(b, d) && (a.length < e && a.push(b[d]), delete b[d])
		}

		function g(a, b, c) {
			var d = a.Ye;
			c = c.replace(/\s\s*$/, "");
			b >= d.length && d.push(h.length ? h.pop() : {});
			b = d[b];
			b.text = c;
			b.width = a.Fl(c);
			a.bg = la(a.bg, b.width)
		}

		function b() {}
		var c = lc.prototype;
		c.da = A();
		c.Fa = function(a) {
			this.Ea = a;
			this.b = a.b
		};
		var a = c.Fa.prototype;
		a.da = function() {
			this.K || (this.H = new Image, this.H.idtkLoadDisposed = !0, this.H.src = this.Lj, this.b.Hm(this.H), this.P = null)
		};
		a.fj = function() {
			this.K || (this.P = null)
		};
		a.hj = function() {
			if (!this.K && this.i.length) {
				this.P || (this.P = this.b.C.Lf(this.H, !1, this.b.ba, this.Dh));
				var a, b;
				a = 0;
				for (b = this.i.length; a < b; a++) this.i[a].P = this.P
			}
		};
		a.Uj = function() {
			this.K || this.i.length || !this.P || (this.b.C.deleteTexture(this.P), this.P = null)
		};
		a.sj = function(a) {
			a.drawImage(this.H, 0, 0)
		};
		c.ya = function(a) {
			this.type = a;
			this.b = a.b
		};
		a = c.ya.prototype;
		a.df = function() {
			d(h, this.Ye, !0);
			d(s, this.hi, !1);
			d(r,
				this.ii, !1);
			Ra(this.Zd)
		};
		a.da = function() {
			this.H = this.type.H;
			this.fi = this.D[0];
			this.Xd = this.D[1];
			this.characterSet = this.D[2];
			this.text = this.D[3];
			this.Yd = this.D[4];
			this.visible = 0 === this.D[5];
			this.Tn = this.D[6] / 2;
			this.Np = this.D[7] / 2;
			this.au = 0 === this.D[9];
			this.wf = this.D[10];
			this.lineHeight = this.D[11];
			this.mf = this.bg = 0;
			this.uc ? (this.Ye.length = 0, Ra(this.hi), Ra(this.ii), Ra(this.Zd)) : (this.Ye = [], this.hi = {}, this.ii = {}, this.Zd = {});
			this.Ch = !0;
			this.ul = this.width;
			this.b.C && (this.type.P || (this.type.P = this.b.C.Lf(this.type.H, !1, this.b.ba, this.type.Dh)), this.P = this.type.P);
			this.tq()
		};
		a.Bb = function() {
			var a = {
					t: this.text,
					csc: this.Yd,
					csp: this.wf,
					lh: this.lineHeight,
					tw: this.bg,
					th: this.mf,
					lrt: this.Qs,
					cw: {}
				},
				b;
			for (b in this.Zd) a.cw[b] = this.Zd[b];
			return a
		};
		a.Rb = function(a) {
			this.text = a.t;
			this.Yd = a.csc;
			this.wf = a.csp;
			this.lineHeight = a.lh;
			this.bg = a.tw;
			this.mf = a.th;
			this.Qs = a.lrt;
			for (var b in a.cw) this.Zd[b] = a.cw[b];
			this.Ch = !0;
			this.ul = this.width
		};
		var e = 1E3,
			h = [],
			s = [],
			r = [];
		a.tq = function() {
			for (var a = this.H, b = a.width, c = a.height, a = this.fi,
					d = this.Xd, e = a / b, g = d / c, h = this.characterSet, b = Math.floor(b / a), c = Math.floor(c / d), l = 0; l < h.length && !(l >= b * c); l++) {
				var n = l % b,
					k = Math.floor(l / b),
					q = h.charAt(l);
				if (this.b.C) {
					var I = this.ii,
						G = n * e,
						ba = k * g,
						n = (n + 1) * e,
						k = (k + 1) * g;
					void 0 === I[q] && (I[q] = r.length ? r.pop() : new sa);
					I[q].left = G;
					I[q].top = ba;
					I[q].right = n;
					I[q].bottom = k
				} else I = this.hi, n *= a, k *= d, G = a, ba = d, void 0 === I[q] && (I[q] = s.length ? s.pop() : {}), I[q].x = n, I[q].y = k, I[q].Op = G, I[q].Sn = ba
			}
		};
		var n = [];
		c.vq = function(a) {
			n.length = 0;
			for (var b = "", c, d = 0; d < a.length;)
				if (c = a.charAt(d),
					"\n" === c) b.length && (n.push(b), b = ""), n.push("\n"), ++d;
				else if (" " === c || "\t" === c || "-" === c) {
				do b += a.charAt(d), d++; while (d < a.length && (" " === a.charAt(d) || "\t" === a.charAt(d)));
				n.push(b);
				b = ""
			} else d < a.length && (b += c, d++);
			b.length && n.push(b)
		};
		c.yq = function(a) {
			var b = a.text,
				c = a.Ye;
			if (b && b.length) {
				var e = a.width;
				if (2 >= e) d(h, c, !0);
				else {
					var g = a.Yd,
						m = a.wf;
					if (b.length * (a.fi * g + m) - m <= e && -1 === b.indexOf("\n") && (m = a.Fl(b), m <= e)) {
						d(h, c, !0);
						c.push(h.length ? h.pop() : {});
						c[0].text = b;
						c[0].width = m;
						a.bg = m;
						a.mf = a.Xd * g + a.lineHeight;
						return
					}
					this.zq(a);
					a.mf = c.length * (a.Xd * g + a.lineHeight)
				}
			} else d(h, c, !0)
		};
		c.zq = function(a) {
			var b = a.au,
				c = a.text,
				d = a.Ye,
				q = a.width;
			b && (this.vq(c), c = n);
			var m = "",
				r, l, t, k = 0,
				s = !1;
			for (t = 0; t < c.length; t++) "\n" === c[t] ? (!0 === s ? s = !1 : (g(a, k, m), k++), m = "") : (s = !1, r = m, m += c[t], l = a.Fl(m.replace(/\s\s*$/, "")), l > q && ("" === r ? (g(a, k, m), m = "", s = !0) : (g(a, k, r), m = c[t]), k++, b || " " !== m || (m = "")));
			m.replace(/\s\s*$/, "").length && (g(a, k, m), k++);
			for (t = k; t < d.length; t++) h.length < e && h.push(d[t]);
			d.length = k
		};
		a.Fl = function(a) {
			for (var b = this.wf,
					c = a.length, d = 0, e = 0; e < c; e++) d += this.Ag(a.charAt(e)) * this.Yd + b;
			return d - (0 < d ? b : 0)
		};
		a.Ag = function(a) {
			var b = this.Zd;
			return void 0 !== b[a] ? b[a] : this.fi
		};
		a.ep = function() {
			if (this.Ch || this.width !== this.ul) this.mf = this.bg = 0, this.type.Ea.yq(this), this.Ch = !1, this.ul = this.width
		};
		a.Ad = function(a) {
			var b = this.H;
			if ("" !== this.text && null != b && (this.ep(), !(this.height < this.Xd * this.Yd + this.lineHeight))) {
				a.globalAlpha = this.opacity;
				var b = this.x,
					c = this.y;
				this.b.md && (b = b + 0.5 | 0, c = c + 0.5 | 0);
				a.save();
				a.translate(b, c);
				a.rotate(this.n);
				for (var b = this.Tn, c = this.Yd, d = this.Xd * c, e = this.lineHeight, g = this.wf, h = this.Ye, l, n = -(this.Eb * this.width), k = -(this.Fb * this.height), k = k + this.Np * la(0, this.height - this.mf), q, r, s = 0; s < h.length; s++) {
					var ba = h[s].text;
					l = b * la(0, this.width - h[s].width);
					l = n + l;
					for (var k = k + e, y = 0; y < ba.length; y++) {
						var K = ba.charAt(y),
							z = this.hi[K];
						if (l + this.Ag(K) * c > this.width + 1E-5) break;
						void 0 !== z && (q = l, r = k, 0 === this.n && (q = Math.round(q), r = Math.round(r)), a.drawImage(this.H, z.x, z.y, z.Op, z.Sn, q, r, z.Op * c, z.Sn * c));
						l += this.Ag(K) * c + g
					}
					k += d;
					if (k +
						d + e > this.height) break
				}
				a.restore()
			}
		};
		var q = new ta;
		a.Ac = function(a) {
			a.hc(this.P);
			a.gf(this.opacity);
			if ("" !== this.text && (this.ep(), !(this.height < this.Xd * this.Yd + this.lineHeight))) {
				this.La();
				var b = this.Wb,
					c = 0,
					d = 0;
				this.b.md && (c = (this.x + 0.5 | 0) - this.x, d = (this.y + 0.5 | 0) - this.y);
				var e = this.n,
					g = this.Tn,
					h = this.Np,
					l = this.Yd,
					n = this.Xd * l,
					k = this.lineHeight,
					r = this.wf,
					s = this.Ye,
					G = this.mf,
					ba, y;
				0 !== e && (ba = Math.cos(e), y = Math.sin(e));
				for (var K, c = b.Aa + c, b = b.Ba + d, h = h * la(0, this.height - G), z, M, G = 0; G < s.length; G++) {
					d = s[G].text;
					K = g * la(0, this.width - s[G].width);
					for (var h = h + k, N = 0; N < d.length; N++) {
						var L = d.charAt(N),
							J = this.ii[L];
						if (K + this.Ag(L) * l > this.width + 1E-5) break;
						if (void 0 !== J) {
							var C = this.fi * l,
								D = this.Xd * l;
							z = K;
							M = h;
							0 === e && (z = Math.round(z), M = Math.round(M));
							q.Aa = z;
							q.Ba = M;
							q.gb = z + C;
							q.hb = M;
							q.Sa = z;
							q.Ta = M + D;
							q.Ua = z + C;
							q.Va = M + D;
							0 !== e && (z = q, M = ba, C = y, D = void 0, D = z.Aa * M - z.Ba * C, z.Ba = z.Ba * M + z.Aa * C, z.Aa = D, D = z.gb * M - z.hb * C, z.hb = z.hb * M + z.gb * C, z.gb = D, D = z.Sa * M - z.Ta * C, z.Ta = z.Ta * M + z.Sa * C, z.Sa = D, D = z.Ua * M - z.Va * C, z.Va = z.Va * M + z.Ua * C, z.Ua = D);
							q.offset(c,
								b);
							a.nd(q.Aa, q.Ba, q.gb, q.hb, q.Ua, q.Va, q.Sa, q.Ta, J)
						}
						K += this.Ag(L) * l + r
					}
					h += n;
					if (h + n + k > this.height) break
				}
			}
		};
		c.p = new(A());
		b.prototype.lk = function(a) {
			ga(a) && 1E9 > a && (a = Math.round(1E10 * a) / 1E10);
			a = a.toString();
			this.text !== a && (this.text = a, this.Ch = !0, this.b.ha = !0)
		};
		a.Qu = function(a, b) {
			var c = parseInt(b, 10);
			this.Zd[a] !== c && (this.Zd[a] = c, this.Ch = !0, this.b.ha = !0)
		};
		c.k = new b;
		c.J = new(A())
	})();

function mc(d) {
		this.b = d
	}
	(function() {
		var d = mc.prototype;
		d.Fa = function(b) {
			this.Ea = b;
			this.b = b.b
		};
		var g = d.Fa.prototype;
		g.da = function() {
			this.K || (this.H = new Image, this.H.idtkLoadDisposed = !0, this.H.src = this.Lj, this.H.sn = this.vm, this.b.Hm(this.H), this.P = this.pattern = null)
		};
		g.fj = function() {
			this.K || (this.P = null)
		};
		g.hj = function() {
			if (!this.K && this.i.length) {
				this.P || (this.P = this.b.C.Lf(this.H, !0, this.b.ba, this.Dh));
				var b, c;
				b = 0;
				for (c = this.i.length; b < c; b++) this.i[b].P = this.P
			}
		};
		g.yl = function() {
			this.K || this.P || !this.b.C || (this.P = this.b.C.Lf(this.H, !0, this.b.ba, this.Dh))
		};
		g.Uj = function() {
			this.K || this.i.length || !this.P || (this.b.C.deleteTexture(this.P), this.P = null)
		};
		g.sj = function(b) {
			b.drawImage(this.H, 0, 0)
		};
		d.ya = function(b) {
			this.type = b;
			this.b = b.b
		};
		g = d.ya.prototype;
		g.da = function() {
			this.visible = 0 === this.D[0];
			this.ph = new sa(0, 0, 0, 0);
			this.Wn = !1;
			this.H = this.type.H;
			this.b.C ? (this.type.yl(), this.P = this.type.P) : (this.type.pattern || (this.type.pattern = this.b.ra.createPattern(this.type.H, "repeat")), this.pattern = this.type.pattern)
		};
		g.ed = function() {
			this.Wn = !1;
			this.H = this.type.H
		};
		g.df = function() {
			this.b.C && this.Wn && this.P && (this.b.C.deleteTexture(this.P), this.P = null)
		};
		g.Ad = function(b) {
			b.globalAlpha = this.opacity;
			b.save();
			b.fillStyle = this.pattern;
			var c = this.x,
				a = this.y;
			this.b.md && (c = c + 0.5 | 0, a = a + 0.5 | 0);
			var d = -(this.Eb * this.width),
				g = -(this.Fb * this.height),
				s = d % this.H.width,
				r = g % this.H.height;
			0 > s && (s += this.H.width);
			0 > r && (r += this.H.height);
			b.translate(c, a);
			b.rotate(this.n);
			b.translate(s, r);
			b.fillRect(d - s, g - r, this.width, this.height);
			b.restore()
		};
		g.Ac = function(b) {
			b.hc(this.P);
			b.gf(this.opacity);
			var c = this.ph;
			c.right = this.width / this.H.width;
			c.bottom = this.height / this.H.height;
			var a = this.Wb;
			if (this.b.md) {
				var d = (this.x + 0.5 | 0) - this.x,
					g = (this.y + 0.5 | 0) - this.y;
				b.nd(a.Aa + d, a.Ba + g, a.gb + d, a.hb + g, a.Ua + d, a.Va + g, a.Sa + d, a.Ta + g, c)
			} else b.nd(a.Aa, a.Ba, a.gb, a.hb, a.Ua, a.Va, a.Sa, a.Ta, c)
		};
		d.p = new(A());
		d.k = new(A());
		d.J = new(A())
	})();

function T(d) {
		this.b = d
	}
	(function() {
		function d(a) {
			n = a.x;
			q = a.y;
			p = a.z
		}

		function g(a) {
			v = a.x;
			u = a.y;
			f = a.z
		}

		function b(a, b, d, e) {
			var f;
			f = x.length ? x.pop() : new c;
			f.init(a, b, d, e);
			return f
		}

		function c() {
			this.yh = this.id = this.Xe = this.We = this.y = this.x = this.Jj = this.Ij = this.tl = this.time = this.rm = 0;
			this.Gh = this.Sj = !1
		}

		function a() {}

		function e() {}
		var h = T.prototype;
		h.Fa = function(a) {
			this.Ea = a;
			this.b = a.b
		};
		h.Fa.prototype.da = A();
		h.ya = function(a) {
			this.type = a;
			this.b = a.b;
			this.touches = [];
			this.Hl = !1
		};
		var s = h.ya.prototype,
			r = {
				left: 0,
				top: 0
			};
		s.xg = function(a) {
			var b,
				c;
			b = 0;
			for (c = this.touches.length; b < c; b++)
				if (this.touches[b].id === a) return b;
			return -1
		};
		var n = 0,
			q = 0,
			p = 0,
			v = 0,
			u = 0,
			f = 0,
			x = [];
		c.prototype.init = function(a, b, c, d) {
			var e = Sa();
			this.rm = this.tl = this.time = e;
			this.Ij = a;
			this.Jj = b;
			this.x = a;
			this.y = b;
			this.We = a;
			this.Xe = b;
			this.id = c;
			this.yh = d;
			this.Gh = this.Sj = !1
		};
		c.prototype.update = function(a, b, c) {
			this.tl = this.time;
			this.time = a;
			this.We = this.x;
			this.Xe = this.y;
			this.x = b;
			this.y = c;
			!this.Gh && 15 <= Oa(this.Ij, this.Jj, this.x, this.y) && (this.Gh = !0)
		};
		c.prototype.Ts = function(a, b) {
			!this.Sj &&
				500 <= Sa() - this.rm && !this.Gh && 15 > Oa(this.Ij, this.Jj, this.x, this.y) && (this.Sj = !0, a.td = this.yh, a.dg = this.id, a.Bf = b, a.b.trigger(T.prototype.p.fq, a), a.Bf = 0)
		};
		var m = -1E3,
			w = -1E3,
			l = -1E4;
		c.prototype.zo = function(a, b) {
			if (!this.Sj) {
				var c = Sa();
				333 >= c - this.rm && !this.Gh && 15 > Oa(this.Ij, this.Jj, this.x, this.y) && (a.td = this.yh, a.dg = this.id, a.Bf = b, 666 >= c - l && 25 > Oa(m, w, this.x, this.y) ? (a.b.trigger(T.prototype.p.cq, a), w = m = -1E3, l = -1E4) : (a.b.trigger(T.prototype.p.lq, a), m = this.x, w = this.y, l = c), a.Bf = 0)
			}
		};
		s.da = function() {
			this.Ls = !("undefined" === typeof window.c2isWindows8 || !window.c2isWindows8);
			this.Bf = this.dg = this.td = this.Ek = this.Dk = this.bn = this.an = this.$m = this.Dq = this.Cq = this.Bq = this.ih = this.hh = this.gh = 0;
			this.Zt = 0 !== this.D[0];
			var a = 0 < this.b.ac ? document : this.b.canvas,
				b = document;
			this.b.Qb ? b = a = window.Canvas : this.b.pc && (b = a = window);
			var c = this;
			window.navigator.pointerEnabled ? (a.addEventListener("pointerdown", function(a) {
				c.Mo(a)
			}, !1), a.addEventListener("pointermove", function(a) {
				c.Lo(a)
			}, !1), b.addEventListener("pointerup", function(a) {
				c.gj(a, !1)
			}, !1), b.addEventListener("pointercancel", function(a) {
				c.gj(a, !0)
			}, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
				a.preventDefault()
			}, !1), document.addEventListener("MSGestureHold", function(a) {
				a.preventDefault()
			}, !1), this.b.canvas.addEventListener("gesturehold", function(a) {
				a.preventDefault()
			}, !1), document.addEventListener("gesturehold", function(a) {
				a.preventDefault()
			}, !1))) : window.navigator.msPointerEnabled ? (a.addEventListener("MSPointerDown", function(a) {
					c.Mo(a)
				}, !1),
				a.addEventListener("MSPointerMove", function(a) {
					c.Lo(a)
				}, !1), b.addEventListener("MSPointerUp", function(a) {
					c.gj(a, !1)
				}, !1), b.addEventListener("MSPointerCancel", function(a) {
					c.gj(a, !0)
				}, !1), this.b.canvas && (this.b.canvas.addEventListener("MSGestureHold", function(a) {
					a.preventDefault()
				}, !1), document.addEventListener("MSGestureHold", function(a) {
					a.preventDefault()
				}, !1))) : (a.addEventListener("touchstart", function(a) {
				c.Oo(a)
			}, !1), a.addEventListener("touchmove", function(a) {
				c.No(a)
			}, !1), b.addEventListener("touchend",
				function(a) {
					c.Rl(a, !1)
				}, !1), b.addEventListener("touchcancel", function(a) {
				c.Rl(a, !0)
			}, !1));
			if (this.Ls) {
				var e = function(a) {
						a = a.reading;
						c.$m = a.accelerationX;
						c.an = a.accelerationY;
						c.bn = a.accelerationZ
					},
					f = function(a) {
						a = a.reading;
						c.gh = a.yawDegrees;
						c.hh = a.pitchDegrees;
						c.ih = a.rollDegrees
					},
					h = Windows.Devices.Sensors.Accelerometer.getDefault();
				h && (h.reportInterval = Math.max(h.minimumReportInterval, 16), h.addEventListener("readingchanged", e));
				var l = Windows.Devices.Sensors.Inclinometer.getDefault();
				l && (l.reportInterval =
					Math.max(l.minimumReportInterval, 16), l.addEventListener("readingchanged", f));
				document.addEventListener("visibilitychange", function() {
					document.hidden || document.msHidden ? (h && h.removeEventListener("readingchanged", e), l && l.removeEventListener("readingchanged", f)) : (h && h.addEventListener("readingchanged", e), l && l.addEventListener("readingchanged", f))
				}, !1)
			} else window.addEventListener("deviceorientation", function(a) {
				c.gh = a.alpha || 0;
				c.hh = a.beta || 0;
				c.ih = a.gamma || 0
			}, !1), window.addEventListener("devicemotion",
				function(a) {
					a.accelerationIncludingGravity && (c.Bq = a.accelerationIncludingGravity.x || 0, c.Cq = a.accelerationIncludingGravity.y || 0, c.Dq = a.accelerationIncludingGravity.z || 0);
					a.acceleration && (c.$m = a.acceleration.x || 0, c.an = a.acceleration.y || 0, c.bn = a.acceleration.z || 0)
				}, !1);
			this.Zt && !this.b.lb && (jQuery(document).mousemove(function(a) {
				c.Zs(a)
			}), jQuery(document).mousedown(function(a) {
				c.Ys(a)
			}), jQuery(document).mouseup(function(a) {
				c.$s(a)
			}));
			this.b.Ef && !this.b.Qb && AppMobi.accelerometer.watchAcceleration(d, {
				frequency: 40,
				adjustForRotation: !0
			});
			this.b.Uc && navigator.accelerometer && navigator.accelerometer.watchAcceleration && navigator.accelerometer.watchAcceleration(g, null, {
				frequency: 40
			});
			this.b.Qt(this)
		};
		s.Lo = function(a) {
			if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
				a.preventDefault && a.preventDefault();
				var b = this.xg(a.pointerId),
					c = Sa();
				if (0 <= b) {
					var d = this.b.lb ? r : jQuery(this.b.canvas).offset(),
						b = this.touches[b];
					2 > c - b.time || b.update(c, a.pageX - d.left, a.pageY - d.top)
				}
			}
		};
		s.Mo = function(a) {
			if (a.pointerType !==
				a.MSPOINTER_TYPE_MOUSE && "mouse" !== a.pointerType) {
				a.preventDefault && a.preventDefault();
				var c = this.b.lb ? r : jQuery(this.b.canvas).offset(),
					d = a.pageX - c.left,
					c = a.pageY - c.top;
				Sa();
				this.td = this.touches.length;
				this.dg = a.pointerId;
				this.touches.push(b(d, c, a.pointerId, this.td));
				this.b.kd = !0;
				this.b.trigger(T.prototype.p.Rm, this);
				this.b.trigger(T.prototype.p.Nh, this);
				this.Dk = d;
				this.Ek = c;
				this.b.trigger(T.prototype.p.Mh, this);
				this.b.kd = !1
			}
		};
		s.gj = function(a, b) {
			if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE && "mouse" !==
				a.pointerType) {
				a.preventDefault && a.preventDefault();
				var c = this.xg(a.pointerId);
				this.td = 0 <= c ? this.touches[c].yh : -1;
				this.dg = 0 <= c ? this.touches[c].id : -1;
				this.b.kd = !0;
				this.b.trigger(T.prototype.p.Qm, this);
				this.b.trigger(T.prototype.p.hk, this);
				0 <= c && (b || this.touches[c].zo(this, c), 100 > x.length && x.push(this.touches[c]), this.touches.splice(c, 1));
				this.b.kd = !1
			}
		};
		s.No = function(a) {
			a.preventDefault && a.preventDefault();
			var b = Sa(),
				c, d, e, f;
			c = 0;
			for (d = a.changedTouches.length; c < d; c++)
				if (e = a.changedTouches[c], f = this.xg(e.identifier),
					0 <= f) {
					var g = this.b.lb ? r : jQuery(this.b.canvas).offset();
					f = this.touches[f];
					2 > b - f.time || f.update(b, e.pageX - g.left, e.pageY - g.top)
				}
		};
		s.Oo = function(a) {
			a.preventDefault && a.preventDefault();
			var c = this.b.lb ? r : jQuery(this.b.canvas).offset();
			Sa();
			this.b.kd = !0;
			var d, e, f, g;
			d = 0;
			for (e = a.changedTouches.length; d < e; d++)
				if (f = a.changedTouches[d], g = this.xg(f.identifier), -1 === g) {
					g = f.pageX - c.left;
					var h = f.pageY - c.top;
					this.td = this.touches.length;
					this.dg = f.identifier;
					this.touches.push(b(g, h, f.identifier, this.td));
					this.b.trigger(T.prototype.p.Rm,
						this);
					this.b.trigger(T.prototype.p.Nh, this);
					this.Dk = g;
					this.Ek = h;
					this.b.trigger(T.prototype.p.Mh, this)
				}
			this.b.kd = !1
		};
		s.Rl = function(a, b) {
			a.preventDefault && a.preventDefault();
			this.b.kd = !0;
			var c, d, e;
			c = 0;
			for (d = a.changedTouches.length; c < d; c++) e = a.changedTouches[c], e = this.xg(e.identifier), 0 <= e && (this.td = this.touches[e].yh, this.dg = this.touches[e].id, this.b.trigger(T.prototype.p.Qm, this), this.b.trigger(T.prototype.p.hk, this), b || this.touches[e].zo(this, e), 100 > x.length && x.push(this.touches[e]), this.touches.splice(e,
				1));
			this.b.kd = !1
		};
		s.pv = function() {
			return this.b.Ef && 0 === this.gh && 0 !== p ? 90 * p : this.b.Uc && 0 === this.gh && 0 !== f ? 90 * f : this.gh
		};
		s.qv = function() {
			return this.b.Ef && 0 === this.hh && 0 !== q ? -90 * q : this.b.Uc && 0 === this.hh && 0 !== u ? -90 * u : this.hh
		};
		s.tv = function() {
			return this.b.Ef && 0 === this.ih && 0 !== n ? 90 * n : this.b.Uc && 0 === this.ih && 0 !== v ? 90 * v : this.ih
		};
		s.Ys = function(a) {
			a.preventDefault && this.b.cl && !this.b.fe && a.preventDefault();
			this.Oo({
				changedTouches: [{
					pageX: a.pageX,
					pageY: a.pageY,
					identifier: 0
				}]
			});
			this.Hl = !0
		};
		s.Zs = function(a) {
			this.Hl &&
				this.No({
					changedTouches: [{
						pageX: a.pageX,
						pageY: a.pageY,
						identifier: 0
					}]
				})
		};
		s.$s = function(a) {
			a.preventDefault && this.b.cl && !this.b.fe && a.preventDefault();
			this.b.cl = !0;
			this.Rl({
				changedTouches: [{
					pageX: a.pageX,
					pageY: a.pageY,
					identifier: 0
				}]
			});
			this.Hl = !1
		};
		s.Eh = function() {
			var a, b, c, d = Sa();
			a = 0;
			for (b = this.touches.length; a < b; ++a) c = this.touches[a], c.time <= d - 50 && (c.tl = d), c.Ts(this, a)
		};
		a.prototype.Nh = B(!0);
		a.prototype.hk = B(!0);
		a.prototype.Mh = function(a) {
			return a ? this.b.Pt(a, this.Dk, this.Ek) : !1
		};
		a.prototype.Rm = function(a) {
			a =
				Math.floor(a);
			return a === this.td
		};
		a.prototype.Qm = function(a) {
			a = Math.floor(a);
			return a === this.td
		};
		a.prototype.fq = B(!0);
		a.prototype.lq = B(!0);
		a.prototype.cq = B(!0);
		h.p = new a;
		e.prototype.Be = function(a, b) {
			var c = this.Bf;
			if (0 > c || c >= this.touches.length) a.F(0);
			else {
				var d, e, f, g, h;
				fa(b) ? (d = this.b.Bg(0), e = d.scale, f = d.dd, g = d.Gc, h = d.n, d.scale = this.b.$.scale, d.dd = 1, d.Gc = 1, d.n = this.b.$.n, a.F(d.Xb(this.touches[c].x, this.touches[c].y, !0)), d.scale = e, d.dd = f, d.Gc = g, d.n = h) : (d = ga(b) ? this.b.Bg(b) : this.b.Yk(b)) ? a.F(d.Xb(this.touches[c].x,
					this.touches[c].y, !0)) : a.F(0)
			}
		};
		e.prototype.kg = function(a, b) {
			var c = this.Bf;
			if (0 > c || c >= this.touches.length) a.F(0);
			else {
				var d, e, f, g, h;
				fa(b) ? (d = this.b.Bg(0), e = d.scale, f = d.dd, g = d.Hc, h = d.n, d.scale = this.b.$.scale, d.dd = 1, d.Hc = 1, d.n = this.b.$.n, a.F(d.Xb(this.touches[c].x, this.touches[c].y, !1)), d.scale = e, d.dd = f, d.Hc = g, d.n = h) : (d = ga(b) ? this.b.Bg(b) : this.b.Yk(b)) ? a.F(d.Xb(this.touches[c].x, this.touches[c].y, !1)) : a.F(0)
			}
		};
		h.J = new e
	})();

function nc(d) {
		this.b = d
	}
	(function() {
		function d() {}

		function g() {}

		function b() {}
		var c = nc.prototype;
		c.Fa = function(a) {
			this.Ea = a;
			this.b = a.b
		};
		c.Fa.prototype.da = A();
		c.ya = function(a) {
			this.type = a;
			this.b = a.b
		};
		var a = c.ya.prototype,
			e = "",
			h = "undefined" !== typeof window.is_scirra_arcade;
		h && (e = "arcade" + window.scirra_arcade_id);
		var s = !1;
		a.da = A();
		d.prototype.Um = function(a) {
			return this.b.pc || !sessionStorage ? (s || (ea("[Construct 2] Webstorage plugin: session storage is not supported on this platform. Try using local storage or global variables instead."),
				s = !0), !1) : null != sessionStorage.getItem(e + a)
		};
		d.prototype.iq = B(!0);
		c.p = new d;
		g.prototype.Zm = function(a, b) {
			try {
				localStorage.setItem(e + a, b);
				// updateShare(b);
// Play68.setRankingScoreDesc(b);
				// console.log(b);
			} catch (c) {
				this.b.trigger(nc.prototype.p.iq, this)
			}
		};
		c.k = new g;
		b.prototype.Nm = function(a, b) {
			a.ic(localStorage.getItem(e + b) || "")
		};
		b.prototype.Jm = function(a) {
			var b = {},
				c, d, g;
			c = 0;
			for (d = localStorage.length; c < d; c++) g = localStorage.key(c), h ? g.substr(0, e.length) === e && (b[g.substr(e.length)] = localStorage.getItem(g)) : b[g] = localStorage.getItem(g);
			a.ic(JSON.stringify({
				c2dictionary: !0,
				data: b
			}))
		};
		c.J = new b
	})();

function oc(d) {
		this.b = d
	}
	(function() {
		function d() {}
		var g = oc.prototype;
		g.Fa = function(b) {
			this.Ma = b;
			this.b = b.b
		};
		g.Fa.prototype.da = A();
		g.ya = function(b, a) {
			this.type = b;
			this.Ma = b.Ma;
			this.j = a;
			this.b = b.b
		};
		var b = g.ya.prototype;
		b.da = function() {
			var b = this.D[0];
			this.lg = this.D[1];
			this.zg = this.D[2];
			this.Jq = 0 !== this.D[3];
			this.lm = 0 !== this.D[4];
			this.tb = Math.cos(this.j.n) * b;
			this.Xa = Math.sin(this.j.n) * b;
			this.We = this.j.x;
			this.Xe = this.j.y;
			this.sc = this.j.n;
			this.Rj = 0;
			this.enabled = 0 !== this.D[5]
		};
		b.Bb = function() {
			return {
				acc: this.lg,
				g: this.zg,
				dx: this.tb,
				dy: this.Xa,
				lx: this.We,
				ly: this.Xe,
				lka: this.sc,
				t: this.Rj,
				e: this.enabled
			}
		};
		b.Rb = function(b) {
			this.lg = b.acc;
			this.zg = b.g;
			this.tb = b.dx;
			this.Xa = b.dy;
			this.We = b.lx;
			this.Xe = b.ly;
			this.sc = b.lka;
			this.Rj = b.t;
			this.enabled = b.e
		};
		b.fb = function() {
			if (this.enabled) {
				var b = this.b.Af(this.j),
					a, d;
				this.j.n !== this.sc && (this.lm && (a = Oa(0, 0, this.tb, this.Xa), this.tb = Math.cos(this.j.n) * a, this.Xa = Math.sin(this.j.n) * a), this.sc = this.j.n);
				0 !== this.lg && (a = Oa(0, 0, this.tb, this.Xa), d = 0 === this.tb && 0 === this.Xa ? this.j.n : Fa(0, 0, this.tb, this.Xa),
					a += this.lg * b, 0 > a && (a = 0), this.tb = Math.cos(d) * a, this.Xa = Math.sin(d) * a);
				0 !== this.zg && (this.Xa += this.zg * b);
				this.We = this.j.x;
				this.Xe = this.j.y;
				if (0 !== this.tb || 0 !== this.Xa)
					if (this.j.x += this.tb * b, this.j.y += this.Xa * b, this.Rj += Oa(0, 0, this.tb * b, this.Xa * b), this.lm && (this.j.n = Fa(0, 0, this.tb, this.Xa), this.j.ea(), this.sc = this.j.n), this.j.ea(), this.Jq && (a = this.b.lf(this.j))) this.b.pt(this.j, a), a = Oa(0, 0, this.tb, this.Xa), d = this.b.Nq(this.j, this.We, this.Xe), this.tb = Math.cos(d) * a, this.Xa = Math.sin(d) * a, this.j.x += this.tb *
						b, this.j.y += this.Xa * b, this.j.ea(), this.lm && (this.sc = this.j.n = d, this.j.ea()), this.b.mt(this.j, this.tb / a, this.Xa / a, Math.max(2.5 * a * b, 30)) || this.b.nt(this.j)
			}
		};
		g.p = new(A());
		d.prototype.Ym = function(b) {
			var a = Fa(0, 0, this.tb, this.Xa);
			this.tb = Math.cos(a) * b;
			this.Xa = Math.sin(a) * b
		};
		d.prototype.Vm = function(b) {
			this.lg = b
		};
		d.prototype.Wm = function(b) {
			this.zg = b
		};
		d.prototype.jk = function(b) {
			this.enabled = 1 === b
		};
		g.k = new d;
		g.J = new(A())
	})();

function pc(d) {
		this.b = d
	}
	(function() {
		function d() {}

		function g() {}
		var b = pc.prototype;
		b.Fa = function(a) {
			this.Ma = a;
			this.b = a.b
		};
		b.Fa.prototype.da = A();
		b.ya = function(a, b) {
			this.type = a;
			this.Ma = a.Ma;
			this.j = b;
			this.b = a.b
		};
		var c = b.ya.prototype;
		c.da = function() {
			var a = 1 === this.D[0];
			this.vg = this.D[1];
			this.Kh = this.D[2];
			this.yi = this.D[3];
			this.Yq = this.D[4];
			this.jc = a ? 0 : 3;
			this.uc ? this.Ic.reset() : this.Ic = new Ta;
			this.cf = this.j.opacity ? this.j.opacity : 1;
			a && (0 === this.vg ? (this.jc = 1, 0 === this.Kh && (this.jc = 2)) : (this.j.opacity = 0, this.b.ha = !0))
		};
		c.Bb = function() {
			return {
				fit: this.vg,
				wt: this.Kh,
				fot: this.yi,
				s: this.jc,
				st: this.Ic.aa,
				mo: this.cf
			}
		};
		c.Rb = function(a) {
			this.vg = a.fit;
			this.Kh = a.wt;
			this.yi = a.fot;
			this.jc = a.s;
			this.Ic.reset();
			this.Ic.aa = a.st;
			this.cf = a.mo
		};
		c.fb = function() {
			this.Ic.add(this.b.Af(this.j));
			0 === this.jc && (this.j.opacity = this.Ic.aa / this.vg * this.cf, this.b.ha = !0, this.j.opacity >= this.cf && (this.j.opacity = this.cf, this.jc = 1, this.Ic.reset()));
			1 === this.jc && this.Ic.aa >= this.Kh && (this.jc = 2, this.Ic.reset());
			2 === this.jc && 0 !== this.yi && (this.j.opacity = this.cf - this.Ic.aa / this.yi * this.cf,
				this.b.ha = !0, 0 > this.j.opacity && (this.j.opacity = 0, this.jc = 3, this.Ic.reset(), this.b.trigger(pc.prototype.p.dq, this.j), 1 === this.Yq && this.b.Qd(this.j)))
		};
		c.kr = function() {
			this.jc = 0;
			this.Ic.reset();
			0 === this.vg ? (this.jc = 1, 0 === this.Kh && (this.jc = 2)) : (this.j.opacity = 0, this.b.ha = !0)
		};
		d.prototype.dq = B(!0);
		b.p = new d;
		g.prototype.jg = function() {
			3 === this.jc && this.kr()
		};
		b.k = new g
	})();

function qc(d) {
		this.b = d
	}
	(function() {
		function d() {}
		var g = qc.prototype;
		g.Fa = function(b) {
			this.Ma = b;
			this.b = b.b
		};
		g.Fa.prototype.da = A();
		g.ya = function(b, a) {
			this.type = b;
			this.Ma = b.Ma;
			this.j = a;
			this.b = b.b
		};
		var b = g.ya.prototype;
		b.da = function() {
			this.$a = null;
			this.lj = -1;
			this.mode = this.sc = this.Mj = this.Rf = this.Ld = this.mh = 0;
			var b = this;
			this.uc || (this.Eo = function(a) {
				b.Pl(a)
			});
			this.b.pk(this.Eo)
		};
		b.Bb = function() {
			return {
				uid: this.$a ? this.$a.uid : -1,
				pa: this.mh,
				pd: this.Ld,
				msa: this.Rf,
				tsa: this.Mj,
				lka: this.sc,
				m: this.mode
			}
		};
		b.Rb = function(b) {
			this.lj =
				b.uid;
			this.mh = b.pa;
			this.Ld = b.pd;
			this.Rf = b.msa;
			this.Mj = b.tsa;
			this.sc = b.lka;
			this.mode = b.m
		};
		b.ed = function() {
			this.$a = -1 === this.lj ? null : this.b.Cg(this.lj);
			this.lj = -1
		};
		b.Pl = function(b) {
			this.$a == b && (this.$a = null)
		};
		b.df = function() {
			this.$a = null;
			this.b.qt(this.Eo)
		};
		b.fb = A();
		b.Eh = function() {
			if (this.$a) {
				this.sc !== this.j.n && (this.Rf = Ca(this.Rf + (this.j.n - this.sc)));
				var b = this.j.x,
					a = this.j.y;
				if (3 === this.mode || 4 === this.mode) {
					var d = Oa(this.j.x, this.j.y, this.$a.x, this.$a.y);
					if (d > this.Ld || 4 === this.mode && d < this.Ld) a =
						Fa(this.$a.x, this.$a.y, this.j.x, this.j.y), b = this.$a.x + Math.cos(a) * this.Ld, a = this.$a.y + Math.sin(a) * this.Ld
				} else b = this.$a.x + Math.cos(this.$a.n + this.mh) * this.Ld, a = this.$a.y + Math.sin(this.$a.n + this.mh) * this.Ld;
				this.sc = d = Ca(this.Rf + (this.$a.n - this.Mj));
				0 !== this.mode && 1 !== this.mode && 3 !== this.mode && 4 !== this.mode || this.j.x === b && this.j.y === a || (this.j.x = b, this.j.y = a, this.j.ea());
				0 !== this.mode && 2 !== this.mode || this.j.n === d || (this.j.n = d, this.j.ea())
			}
		};
		g.p = new(A());
		d.prototype.ye = function(b, a) {
			if (b) {
				var d = b.Nn(this.j);
				d && (this.$a = d, this.mh = Fa(d.x, d.y, this.j.x, this.j.y) - d.n, this.Ld = Oa(d.x, d.y, this.j.x, this.j.y), this.sc = this.Rf = this.j.n, this.Mj = d.n, this.mode = a)
			}
		};
		d.prototype.xq = function() {
			this.$a = null
		};
		g.k = new d;
		g.J = new(A())
	})();

function rc(d) {
		this.b = d
	}
	(function() {
		function d() {}

		function g() {}
		var b = rc.prototype;
		b.Fa = function(a) {
			this.Ma = a;
			this.b = a.b
		};
		b.Fa.prototype.da = A();
		b.ya = function(a, b) {
			this.type = a;
			this.Ma = a.Ma;
			this.j = b;
			this.b = a.b
		};
		var c = b.ya.prototype;
		c.da = function() {
			this.Db = {}
		};
		c.df = function() {
			Ra(this.Db)
		};
		c.Bb = function() {
			var a = {},
				b, c;
			for (b in this.Db) this.Db.hasOwnProperty(b) && (c = this.Db[b], a[b] = {
				c: c.He.aa,
				t: c.total.aa,
				d: c.duration,
				r: c.cm
			});
			return a
		};
		c.Rb = function(a) {
			this.Db = {};
			for (var b in a) a.hasOwnProperty(b) && (this.Db[b] = {
				He: new Ta,
				total: new Ta,
				duration: a[b].d,
				cm: a[b].r
			}, this.Db[b].He.aa = a[b].c, this.Db[b].total.aa = a[b].t)
		};
		c.fb = function() {
			var a = this.b.Af(this.j),
				b, c;
			for (b in this.Db) this.Db.hasOwnProperty(b) && (c = this.Db[b], c.He.add(a), c.total.add(a))
		};
		c.Eh = function() {
			var a, b;
			for (a in this.Db) this.Db.hasOwnProperty(a) && (b = this.Db[a], b.He.aa >= b.duration && (b.cm ? b.He.aa -= b.duration : delete this.Db[a]))
		};
		b.p = new(A());
		d.prototype.uq = function(a, b, c) {
			this.Db[c.toLowerCase()] = {
				He: new Ta,
				total: new Ta,
				duration: a,
				cm: 1 === b
			}
		};
		b.k = new d;
		g.prototype.Lm =
			function(a, b) {
				var c = this.Db[b.toLowerCase()];
				a.F(c ? c.duration : 0)
			};
		b.J = new g
	})();
var sc = [],
	tc = [],
	uc = [],
	vc = [],
	wc = [],
	xc = [],
	yc = [],
	zc = [],
	Ec = [],
	Fc = 1E4;

function Gc(d, g) {
	return Math.round(d / g * Fc)
}

function Hc(d, g, b) {
	switch (d) {
		case 0:
			return 1 * g / b + 0;
		case 1:
			return 1 * (g /= b) * g + 0;
		case 2:
			return -1 * (g /= b) * (g - 2) + 0;
		case 3:
			return 1 > (g /= b / 2) ? 0.5 * g * g + 0 : -0.5 * (--g * (g - 2) - 1) + 0;
		case 4:
			return 1 * (g /= b) * g * g + 0;
		case 5:
			return 1 * ((g = g / b - 1) * g * g + 1) + 0;
		case 6:
			return 1 > (g /= b / 2) ? 0.5 * g * g * g + 0 : 0.5 * ((g -= 2) * g * g + 2) + 0;
		case 7:
			return 1 * (g /= b) * g * g * g + 0;
		case 8:
			return -1 * ((g = g / b - 1) * g * g * g - 1) + 0;
		case 9:
			return 1 > (g /= b / 2) ? 0.5 * g * g * g * g + 0 : -0.5 * ((g -= 2) * g * g * g - 2) + 0;
		case 10:
			return 1 * (g /= b) * g * g * g * g + 0;
		case 11:
			return 1 * ((g = g / b - 1) * g * g * g * g + 1) + 0;
		case 12:
			return 1 >
				(g /= b / 2) ? 0.5 * g * g * g * g * g + 0 : 0.5 * ((g -= 2) * g * g * g * g + 2) + 0;
		case 13:
			return wc[Gc(g, b)];
		case 14:
			return xc[Gc(g, b)];
		case 15:
			return yc[Gc(g, b)];
		case 16:
			return d = 0, 0 == d && (d = 1.70158), 1 * (g /= b) * g * ((d + 1) * g - d) + 0;
		case 17:
			return zc[Gc(g, b)];
		case 18:
			return Ec[Gc(g, b)];
		case 19:
			return tc[Gc(g, b)];
		case 20:
			return uc[Gc(g, b)];
		case 21:
			return vc[Gc(g, b)];
		case 22:
			return 1 - sc[Gc(b - g, b)] + 0;
		case 23:
			return sc[Gc(g, b)];
		case 24:
			return g < b / 2 ? 0.5 * (1 - sc[Gc(b - 2 * g, b)] + 0) + 0 : 0.5 * sc[Gc(2 * g - b, b)] + 0.5;
		case 25:
			return g = g / b / 2, 2 * g * g * (3 - 2 * g);
		case 26:
			return g =
				(g / b + 1) / 2, 2 * g * g * (3 - 2 * g) - 1;
		case 27:
			return g /= b, g * g * (3 - 2 * g)
	}
	return 0
}
for (var Ic = 0, Jc = 0, Kc = 0, U = 0, V = 0, Y = 0; Y <= Fc; Y++) {
	U = Y / Fc;
	(U /= 1) < 1 / 2.75 || (U < 2 / 2.75 ? U -= 1.5 / 2.75 : U < 2.5 / 2.75 ? U -= 2.25 / 2.75 : U -= 2.625 / 2.75);
	var Lc, Mc = Y / Fc;
	Lc = (Mc /= 1) < 1 / 2.75 ? 7.5625 * Mc * Mc + 0 : Mc < 2 / 2.75 ? 1 * (7.5625 * (Mc -= 1.5 / 2.75) * Mc + 0.75) + 0 : Mc < 2.5 / 2.75 ? 1 * (7.5625 * (Mc -= 2.25 / 2.75) * Mc + 0.9375) + 0 : 1 * (7.5625 * (Mc -= 2.625 / 2.75) * Mc + 0.984375) + 0;
	sc[Y] = Lc;
	U = Y / Fc;
	Kc = Jc = 0;
	U /= 1;
	0 == Kc && (Kc = 0.3);
	0 == Jc || Jc < Math.abs(1) ? (Jc = 1, V = Kc / 4) : V = Kc / (2 * Math.PI) * Math.asin(1 / Jc);
	Ic = -(Jc * Math.pow(2, 10 * (U -= 1)) * Math.sin(2 * (1 * U - V) * Math.PI / Kc)) + 0;
	tc[Y] = Ic;
	U = Y / Fc;
	Kc = Jc = 0;
	U /= 1;
	0 == Kc && (Kc = 0.3);
	0 == Jc || Jc < Math.abs(1) ? (Jc = 1, V = Kc / 4) : V = Kc / (2 * Math.PI) * Math.asin(1 / Jc);
	Ic = Jc * Math.pow(2, -10 * U) * Math.sin(2 * (1 * U - V) * Math.PI / Kc) + 1;
	uc[Y] = Ic;
	U = Y / Fc;
	Kc = Jc = 0;
	U /= 0.5;
	0 == Kc && (Kc = 0.3 * 1.5);
	0 == Jc || Jc < Math.abs(1) ? (Jc = 1, V = Kc / 4) : V = Kc / (2 * Math.PI) * Math.asin(1 / Jc);
	Ic = 1 > U ? -0.5 * Jc * Math.pow(2, 10 * (U -= 1)) * Math.sin(2 * (1 * U - V) * Math.PI / Kc) + 0 : 0.5 * Jc * Math.pow(2, -10 * (U -= 1)) * Math.sin(2 * (1 * U - V) * Math.PI / Kc) + 1;
	vc[Y] = Ic;
	U = Y / Fc;
	wc[Y] = -(Math.sqrt(1 - U * U) - 1);
	U = Y / Fc;
	xc[Y] = Math.sqrt(1 - (U - 1) * (U - 1));
	U = Y /
		Fc;
	Ic = 1 > (U /= 0.5) ? -0.5 * (Math.sqrt(1 - U * U) - 1) + 0 : 0.5 * (Math.sqrt(1 - (U -= 2) * U) + 1) + 0;
	yc[Y] = Ic;
	U = Y / Fc;
	V = 0;
	0 == V && (V = 1.70158);
	Ic = 1 * ((U = U / 1 - 1) * U * ((V + 1) * U + V) + 1) + 0;
	zc[Y] = Ic;
	U = Y / Fc;
	V = 0;
	0 == V && (V = 1.70158);
	Ic = 1 > (U /= 0.5) ? 0.5 * U * U * (((V *= 1.525) + 1) * U - V) + 0 : 0.5 * ((U -= 2) * U * (((V *= 1.525) + 1) * U + V) + 2) + 0;
	Ec[Y] = Ic
}

function Oc(d, g, b, c, a, e, h) {
	this.name = d;
	this.value = 0;
	this.sh(c);
	this.om(a);
	this.Jk = b;
	this.rb = g;
	this.duration = e;
	this.state = this.la = 0;
	this.ij = this.jj = this.ej = this.Vf = !1;
	this.ec = this.Za = 0;
	this.mc = h;
	this.ef = 1
}
Oc.prototype = {};
Oc.prototype.sh = function(d) {
	this.ua = parseFloat(d.split(",")[0]);
	this.Gb = parseFloat(d.split(",")[1]);
	this.ec = this.Za = 0
};
Oc.prototype.om = function(d) {
	this.ma = parseFloat(d.split(",")[0]);
	this.eb = parseFloat(d.split(",")[1]);
	isNaN(this.eb) && (this.eb = this.ma)
};
Oc.prototype.gk = function(d) {
	if (0 === this.state) return -1;
	1 === this.state && (this.la += d);
	2 === this.state && (this.la -= d);
	3 === this.state && (this.state = 0);
	4 === this.state && (this.la += d * this.ef);
	5 === this.state && (this.la += d * this.ef);
	return 0 > this.la ? (this.la = 0, 4 !== this.state ? this.state = 0 : this.ef = 1, this.ij = !0, 0) : this.la > this.duration ? (this.la = this.duration, 4 === this.state ? this.ef = -1 : 5 === this.state ? this.la = 0 : this.state = 0, this.ej = !0, 1) : Hc(this.Jk, this.la, this.duration)
};

function Z(d) {
		this.b = d
	}
	(function() {
		var d = Z.prototype;
		d.Fa = function(b) {
			this.Ma = b;
			this.b = b.b
		};
		d.Fa.prototype.da = A();
		d.ya = function(b, c) {
			this.type = b;
			this.Ma = b.Ma;
			this.j = c;
			this.b = b.b
		};
		var g = d.ya.prototype;
		g.da = function() {
			this.nj = this.D[0];
			this.Nb = 1 == this.nj || 2 == this.nj || 4 == this.nj || 5 == this.nj;
			this.rb = this.D[1];
			this.or = this.D[2];
			this.target = this.D[3];
			this.wp = this.D[4];
			1 === this.wp && (this.target = "relative(" + this.target + ")");
			this.duration = this.D[5];
			this.mc = 1 === this.D[6];
			this.value = 0;
			this.L = {};
			this.en(this.rb, this.or, "current", this.target,
				this.duration, this.mc);
			1 === this.D[0] && this.Gj(0);
			2 === this.D[0] && this.Gj(2);
			3 === this.D[0] && this.Gj(3)
		};
		g.ke = function(b, c) {
			void 0 === c && (c = "current");
			var a = c.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
			c = c.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
			var d = this.value;
			if ("current" === c) switch (b) {
				case 0:
					a = this.j.x + "," + this.j.y;
					break;
				case 1:
					a = this.j.width + "," + this.j.height;
					break;
				case 2:
					a = this.j.width + "," + this.j.height;
					break;
				case 3:
					a = this.j.width + "," + this.j.height;
					break;
				case 4:
					a = Aa(this.j.n) + "," + Aa(this.j.n);
					break;
				case 5:
					a = 100 * this.j.opacity + "," + 100 * this.j.opacity;
					break;
				case 6:
					a = d + "," + d;
					break;
				case 7:
					a = this.j.x + "," + this.j.y;
					break;
				case 8:
					a = this.j.x + "," + this.j.y
			}
			if ("relative" === c.substring(0, 8)) {
				var g = c.match(/\((.*?)\)/);
				if (g) var s = parseFloat(g[1].split(",")[0]),
					r = parseFloat(g[1].split(",")[1]);
				isNaN(s) && (s = 0);
				isNaN(r) && (r = 0);
				switch (b) {
					case 0:
						a = this.j.x + s + "," + (this.j.y + r);
						break;
					case 1:
						a = this.j.width + s + "," + (this.j.height + r);
						break;
					case 2:
						a = this.j.width + s + "," + (this.j.height + r);
						break;
					case 3:
						a = this.j.width +
							s + "," + (this.j.height + r);
						break;
					case 4:
						a = Aa(this.j.n) + s + "," + (Aa(this.j.n) + r);
						break;
					case 5:
						a = 100 * this.j.opacity + s + "," + (100 * this.j.opacity + r);
						break;
					case 6:
						a = d + s + "," + d + s;
						break;
					case 7:
						a = this.j.x + s + "," + this.j.y;
						break;
					case 8:
						a = this.j.x + "," + (this.j.y + s)
				}
			}
			return a
		};
		g.en = function(b, c, a, d, g, s) {
			a = this.ke(b, a);
			d = this.ke(b, d);
			void 0 !== this.L["default"] && delete this.L["default"];
			this.L["default"] = new Oc("default", b, c, a, d, g, s)
		};
		g.Bb = A();
		g.Rb = A();
		g.It = function(b) {
			1 < b && (b = 1);
			0 > b && (b = 0);
			for (var c in this.L) {
				var a = this.L[c];
				a.Za = 0;
				a.ec = 0;
				a.state = 3;
				a.la = b * a.duration;
				var d = a.gk(0);
				this.Cm(a, d)
			}
		};
		g.Gj = function(b) {
			for (var c in this.L) {
				var a = this.L[c];
				0 === b && (a.la = 1E-6, a.Za = 0, a.ec = 0, a.Vf = !0, a.state = 1);
				1 === b && (a.state = 1);
				2 === b && (a.la = 1E-6, a.Za = 0, a.ec = 0, a.Vf = !0, a.state = 4);
				3 === b && (a.la = 1E-6, a.Za = 0, a.ec = 0, a.Vf = !0, a.state = 5)
			}
		};
		g.Ot = function(b) {
			for (var c in this.L) {
				var a = this.L[c];
				1 === b && (a.la = 0);
				2 === b && (a.la = a.duration);
				a.state = 3;
				var d = a.gk(0);
				this.Cm(a, d)
			}
		};
		g.xt = function(b) {
			for (var c in this.L) {
				var a = this.L[c];
				1 === b && (a.la = a.duration,
					a.Za = 0, a.ec = 0, a.jj = !0);
				a.state = 2
			}
		};
		g.Cm = function(b, c) {
			if (0 === b.rb) b.mc ? (this.j.x = b.ua + (b.ma - b.ua) * c, this.j.y = b.Gb + (b.eb - b.Gb) * c) : (this.j.x += (b.ma - b.ua) * c - b.Za, this.j.y += (b.eb - b.Gb) * c - b.ec, b.Za = (b.ma - b.ua) * c, b.ec = (b.eb - b.Gb) * c);
			else if (1 === b.rb) b.mc ? (this.j.width = b.ua + (b.ma - b.ua) * c, this.j.height = b.Gb + (b.eb - b.Gb) * c) : (this.j.width += (b.ma - b.ua) * c - b.Za, this.j.height += (b.eb - b.Gb) * c - b.ec, b.Za = (b.ma - b.ua) * c, b.ec = (b.eb - b.Gb) * c);
			else if (2 === b.rb) b.mc ? this.j.width = b.ua + (b.ma - b.ua) * c : (this.j.width += (b.ma - b.ua) *
				c - b.Za, b.Za = (b.ma - b.ua) * c);
			else if (3 === b.rb) b.mc ? this.j.height = b.Gb + (b.eb - b.Gb) * c : (this.j.height += (b.eb - b.Gb) * c - b.ec, b.ec = (b.eb - b.Gb) * c);
			else if (4 === b.rb)
				if (b.mc) {
					var a = b.ua + (b.ma - b.ua) * c;
					this.j.n = Ca(E(a))
				} else a = (b.ma - b.ua) * c - b.Za, this.j.n = Ca(this.j.n + E(a)), b.Za = (b.ma - b.ua) * c;
			else 5 === b.rb ? b.mc ? this.j.opacity = (b.ua + (b.ma - b.ua) * c) / 100 : (this.j.opacity += ((b.ma - b.ua) * c - b.Za) / 100, b.Za = (b.ma - b.ua) * c) : 6 === b.rb ? b.mc ? this.value = b.ua + (b.ma - b.ua) * c : (this.value += (b.ma - b.ua) * c - b.Za, b.Za = (b.ma - b.ua) * c) : 7 === b.rb ?
				b.mc ? this.j.x = b.ua + (b.ma - b.ua) * c : (this.j.x += (b.ma - b.ua) * c - b.Za, b.Za = (b.ma - b.ua) * c) : 8 === b.rb && (b.mc ? this.j.y = b.Gb + (b.eb - b.Gb) * c : (this.j.y += (b.eb - b.Gb) * c - b.ec, b.ec = (b.eb - b.Gb) * c));
			this.j.ea()
		};
		g.fb = function() {
			var b = this.b.Af(this.j),
				c = this.L["default"];
			0 !== c.state && (c.Vf && (this.b.trigger(Z.prototype.p.kq, this.j), c.Vf = !1), c.jj && (this.b.trigger(Z.prototype.p.jq, this.j), c.jj = !1), this.Nb = 1 == c.state || 2 == c.state || 4 == c.state || 5 == c.state, b = c.gk(b), this.Cm(c, b), c.ej && (this.b.trigger(Z.prototype.p.ck, this.j),
				c.ej = !1), c.ij && (this.b.trigger(Z.prototype.p.Sm, this.j), c.ij = !1))
		};
		d.p = {};
		g = d.p;
		g.su = function() {
			return 0 !== this.L["default"].state
		};
		g.mu = function(b, c) {
			var a = this.L["default"];
			return $b(a.la / a.duration, b, c)
		};
		g.kq = function() {
			return void 0 === this.L["default"] ? !1 : this.L["default"].Vf
		};
		g.jq = function() {
			return void 0 === this.L["default"] ? !1 : this.L["default"].jj
		};
		g.ck = function() {
			return void 0 === this.L["default"] ? !1 : this.L["default"].ej
		};
		g.Sm = function() {
			return void 0 === this.L["default"] ? !1 : this.L["default"].ij
		};
		d.k = {};
		g = d.k;
		g.Ph = function(b) {
			this.Gj(b)
		};
		g.Qh = function(b) {
			this.Ot(b)
		};
		g.pq = function(b) {
			this.xt(b)
		};
		g.Ku = function(b) {
			this.It(b)
		};
		g.ik = function(b) {
			isNaN(b) || 0 > b || void 0 === this.L["default"] || (this.L["default"].duration = b)
		};
		g.Uu = function(b) {
			void 0 !== this.L["default"] && (this.L["default"].mc = 1 === b)
		};
		g.Wu = function(b) {
			void 0 !== this.L["default"] && (b = this.ke(this.L["default"].rb, b), this.L["default"].sh(b))
		};
		g.Oh = function(b, c, a) {
			if (void 0 !== this.L["default"] && !isNaN(a)) {
				var d = a + "",
					g = this.L["default"];
				this.wp =
					c;
				if (1 === c) switch (b) {
					case 0:
						d = this.j.x + a + "," + g.eb;
						break;
					case 1:
						d = g.ma + "," + (this.j.y + a);
						break;
					case 2:
						d = "" + Aa(this.j.n + E(a));
						break;
					case 3:
						d = "" + 100 * this.j.opacity + a;
						break;
					case 4:
						d = this.j.width + a + "," + g.eb;
						break;
					case 5:
						d = g.ma + "," + (this.j.height + a);
						break;
					case 6:
						d = a + "," + a
				} else switch (b) {
					case 0:
						d = a + "," + g.eb;
						break;
					case 1:
						d = g.ma + "," + a;
						break;
					case 2:
						d = a + "," + a;
						break;
					case 3:
						d = a + "," + a;
						break;
					case 4:
						d = a + "," + g.eb;
						break;
					case 5:
						d = g.ma + "," + a;
						break;
					case 6:
						d = a + "," + a
				}
				b = this.ke(this.L["default"].rb, "current");
				d = this.ke(this.L["default"].rb,
					d);
				g.sh(b);
				g.om(d)
			}
		};
		g.bv = function(b) {
			void 0 !== this.L["default"] && (this.L["default"].rb = b)
		};
		g.Ru = function(b) {
			void 0 !== this.L["default"] && (this.L["default"].Jk = b)
		};
		g.cv = function(b) {
			var c = this.L["default"];
			this.value = b;
			6 === c.rb && c.sh(this.ke(c.rb, "current"))
		};
		g.Yu = function(b, c, a, d, g) {
			if (void 0 === this.L["default"]) this.en(b, c, initial, a, d, g);
			else {
				var s = this.L["default"];
				s.rb = b;
				s.Jk = c;
				s.sh(this.ke(b, "current"));
				s.om(this.ke(b, a));
				s.duration = d;
				s.mc = 1 === g
			}
		};
		d.J = {};
		d = d.J;
		d.mq = function(b) {
			b.F(this.L["default"].la /
				this.L["default"].duration)
		};
		d.Lm = function(b) {
			b.F(this.L["default"].duration)
		};
		d.hv = function(b) {
			var c = this.L["default"],
				a = "N/A";
			switch (c.rb) {
				case 0:
					a = c.ma;
					break;
				case 1:
					a = c.eb;
					break;
				case 2:
					a = c.ma;
					break;
				case 3:
					a = c.ma;
					break;
				case 4:
					a = c.ma;
					break;
				case 5:
					a = c.eb;
					break;
				case 6:
					a = c.ma
			}
			b.F(a)
		};
		d.kv = function(b) {
			b.F(this.value)
		}
	})();

function jc() {
	return [null, null, [
			[kc, !0, !1, !1, !1, !1, !1, !1, !1, !1],
			[S, !1, !0, !0, !0, !0, !0, !0, !0, !1],
			[lc, !1, !0, !0, !0, !0, !0, !0, !0, !0],
			[mc, !1, !0, !0, !0, !0, !0, !0, !0, !0],
			[T, !0, !1, !1, !1, !1, !1, !1, !1, !1],
			[nc, !0, !1, !1, !1, !1, !1, !1, !1, !1]
		],
		[
			["t0", S, !1, [0xb9fa618496c3a, 0x5007d698abc45, 6462996755719613], 4, 0, null, [
					["Default", 5, !1, 1, 0, !1, 0x54700b5306643, [
						["images/player-sheet0.png", 1492, 0, 0, 46, 63, 1, 0.4130434691905975, 1, [
								["Imagepoint 1", 0.4130434691905975, 0.9841269850730896]
							],
							[-0.3423912525177002, -0.9047619104385376, 0.3097825348377228, -0.930555522441864, 0.4755435287952423, -0.3283730149269104, 0.1005435287952423, -0.04761898517608643, -0.2391304671764374, -0.04761898517608643], 0
						]
					]]
				],
				[
					["Timer", rc, 6162798294806421],
					["Bullet", oc, 0x5b6ffb9bc58ad],
					["LiteTween", Z, 0x3ff7f6ad13023],
					["Pin", qc, 6052597344446455]
				], !1, !1, 8812520731815215, [], null
			],
			["t1", S, !1, [9908557560752956], 0, 0, null, [
					["Default", 5, !1, 1, 0, !1, 9600589887346456, [
						["images/sprite2-sheet0.png", 154, 0, 0, 95, 119, 1, 0.5052631497383118, 0.5042017102241516, [
								["Imagepoint 1", 0.75789475440979, 0.01680672354996204],
								["Imagepoint 2", 0.9684210419654846, 0.01680672354996204],
								["Imagepoint 3", 0.02105263248085976, 0.01680672354996204]
							],
							[], 0
						]
					]]
				],
				[], !1, !1, 7926323948654762, [], null
			],
			["t2", S, !1, [7520364045152253, 9605899647129224], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 8278401119286777, [
						["images/sprite3-sheet0.png", 111, 0, 0, 7, 252, 1, 0.5714285969734192, 1, [
								["Imagepoint 1", 0.5714285969734192, 0.003968254197388887]
							],
							[], 0
						]
					]]
				],
				[
					["LiteTween", Z, 0x81213a58e3c27]
				], !1, !1, 0x84778338e7ff3, [], null
			],
			["t3", T, !1, [], 0, 0, null, null, [], !1, !1, 9597094742115196, [], null, [1]],
			["t4", kc, !1, [], 0, 0, null, null, [], !1, !1, 0x83e665f22c6be, [], null, [0, 0, 1, 1, 600, 600, 1E4, 1, 5E3, 1]],
			["t5", S, !1, [], 2, 0, null, [
					["Default", 5, !1, 1, 0, !1, 0x69248a472e283, [
						["images/sprite-sheet0.png", 119, 0, 0, 44, 50, 1, 0.4772727191448212, 0.5600000023841858, [],
							[], 0
						]
					]]
				],
				[
					["LiteTween", Z, 7832780466011215],
					["Pin", qc, 7302474071087465]
				], !1, !1, 531443339106841, [], null
			],
			["t6", S, !1, [], 2, 0, null, [
					["Default", 5, !1, 1, 0, !1, 5639446886012286, [
						["images/sprite4-sheet0.png", 6433, 0, 0, 262, 262, 1, 0.5, 0.5, [],
							[-0.3625950217247009, -0.3358780145645142, -0.03816801309585571, -0.4961832165718079, 0.3244270086288452, -0.3740459978580475, 0.4809160232543945, -0.1259540021419525, 0.4389309883117676, 0.236640989780426, -0.03816801309585571, 0.4961829781532288, -0.4618321061134338, 0.1832060217857361, -0.4809159934520721, -0.1259540021419525], 0
						]
					]]
				],
				[
					["LiteTween", Z, 0x6e5280e4eb98b],
					["Fade", pc, 0xccdad10b88b59]
				], !1, !1, 7960078723638771, [], null
			],
			["t7", S, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 5823418968387113, [
						["images/sprite5-sheet0.png", 1138, 0, 0, 122,
							122, 1, 0.5, 0.5, [],
							[-0.3360660076141357, -0.3524590134620667, 0.04098397493362427, -0.4836066067218781, 0.3770490288734436, -0.3114749789237976, 0.4836069941520691, 0.04917997121810913, 0.3278689980506897, 0.3688520193099976, 0.04098397493362427, 0.4836069941520691, -0.2786889970302582, 0.4016389846801758, -0.4836066067218781, 0.04917997121810913], 0
						]
					]]
				],
				[
					["Fade", pc, 838644655736204]
				], !1, !1, 6164627955745236, [], null
			],
			["t8", S, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 5924158941209469, [
						["images/sprite6-sheet0.png", 12145,
							0, 0, 572, 321, 1, 0.6678321957588196, 0.2554517090320587, [],
							[-0.5769230723381042, -0.190031111240387, 0.2622377872467041, -0.1713395118713379, 0.3286707997322083, 0.1838002800941467, 0.2587407827377319, 0.535825252532959, -0.1520981788635254, 0.6760122776031494, -0.533217191696167, 0.4828663170337677, -0.6660839319229126, 0.1838002800941467], 0
						]
					]]
				],
				[
					["Fade", pc, 6845614629349602]
				], !1, !1, 0x4d1b4a9de5228, [], null
			],
			["t9", mc, !1, [], 1, 0, ["images/bb.png", 497, 1], null, [
					["LiteTween", Z, 716130858014041]
				], !1, !1, 0xd8ff6606c2909, [],
				null
			],
			["t10", S, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 0xed6ca165db968, [
						["images/sprite7-sheet0.png", 2311, 0, 0, 448, 285, 1, 0.5133928656578064, 0.6245614290237427, [],
							[-0.5022321939468384, -0.6070175170898438, -0.0133928656578064, -0.6210526823997498, 0.4754461050033569, -0.6070175170898438, 0.4754461050033569, 0.3578945994377136, -0.0133928656578064, 0.3719295859336853, -0.5022321939468384, 0.3578945994377136], 0
						]
					]]
				],
				[
					["LiteTween", Z, 5882971777310524]
				], !1, !1, 561940439425548, [], null
			],
			["t11", S, !1, [], 1, 0, null, [
					["Default",
						5, !1, 1, 0, !1, 9173718587383972, [
							["images/sprite8-sheet0.png", 2006, 0, 0, 322, 83, 1, 0.5031055808067322, 0.4819277226924896, [],
								[-0.4968943893909454, -0.2048197090625763, -0.02484458684921265, -0.4216867089271545, 0.4875774383544922, -0.3493977189064026, 0.4906834363937378, 0.361445277929306, -0.02484458684921265, 0.4578312933444977, -0.4937888085842133, 0.1927712857723236], 0
							]
						]
					]
				],
				[
					["Pin", qc, 5516270865736215]
				], !1, !1, 9867752013539772, [], null
			],
			["t12", S, !1, [], 1, 0, null, [
					["Default", 0, !1, 1, 0, !1, 0x3a8108a2837d6, [
						["images/sprite9-sheet1.png",
							1716, 1, 1, 76, 76, 1, 0.5, 0.5, [],
							[-0.4605262875556946, -0.4342105090618134, 0.02631598711013794, -0.4868420958518982, 0.4736840128898621, -0.3947370052337647, 0.4868419766426086, 0.02631598711013794, 0.4605259895324707, 0.4473680257797241, 0.02631598711013794, 0.4868419766426086, -0.4210526049137116, 0.4605259895324707, -0.4868420958518982, 0.02631598711013794], 0
						],
						["images/sprite9-sheet0.png", 9169, 0, 0, 262, 262, 1, 0.5, 0.5, [],
							[-0.4083968997001648, -0.2824429869651794, -0.06106901168823242, -0.4923664033412933, 0.3511450290679932, -0.3473280072212219, 0.4961829781532288, -0.01908400654792786, 0.3702290058135986, 0.3282439708709717, -0.06106901168823242, 0.4923660159111023, -0.4236640930175781, 0.2595419883728027, -0.4961832165718079, -0.01908400654792786], 0
						],
						["images/sprite9-sheet1.png", 1716, 129, 1, 76, 76, 1, 0.5, 0.5, [],
							[], 0
						]
					]]
				],
				[
					["Pin", qc, 532240736867219]
				], !1, !1, 9040860994490464, [], null
			],
			["t13", lc, !1, [], 1, 0, ["images/spritefont.png", 2684, 0], null, [
				["Pin", qc, 8905522558205407]
			], !1, !1, 0x8a4a98dbad7d1, [], null],
			["t14", lc, !1, [], 1, 0, ["images/spritefont2.png",
				2730, 0
			], null, [
				["Fade", pc, 8394956627605564]
			], !1, !1, 6662633823640191, [], null],
			["t15", S, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 493763005418497, [
						["images/sprite10-sheet0.png", 2328, 0, 0, 289, 68, 1, 0.4878892600536346, 0.455882340669632, [],
							[-0.4359861612319946, 0.1470586359500885, -2.682209014892578E-7, -0.426470547914505, 0.5051907300949097, -0.1470583379268646, 0.4602077305316925, -0.05882334709167481, -2.682209014892578E-7, 0.5147056579589844, -0.4602075517177582, -0.05882334709167481], 0
						]
					]]
				],
				[
					["Fade", pc, 6414514060202242]
				], !1, !1, 8303894239311853, [], null
			],
			["t16", nc, !1, [], 0, 0, null, null, [], !1, !1, 0xf11eeb4fbf76, [], null, []],
			["t17", S, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 0xcb8cb3737343b, [
						["images/sprite11-sheet0.png", 1729, 0, 0, 124, 64, 1, 0.5161290168762207, 0.671875, [],
							[-0.2096770107746124, -0.265625, -0.008064031600952148, -0.640625, 0.2983869910240173, -0.453125, 0.4435479640960693, -0.25, 0.4274190068244934, 0.21875, -0.008064031600952148, 0.3125, -0.4758064150810242, 0.296875, -0.3709680140018463, -0.25], 0
						]
					]]
				],
				[
					["Bullet", oc, 0x5c7b1c73eff88]
				], !1, !1, 0x50a7d6eb0eec1, [], null
			],
			["t18", mc, !1, [], 0, 0, ["images/tiledbackground4.png", 109, 1], null, [], !1, !1, 5110367643940003, [], null],
			["t19", S, !1, [], 2, 0, null, [
					["Default", 5, !1, 1, 0, !1, 906358713044733, [
						["images/sprite12-sheet0.png", 3127, 0, 0, 64, 68, 1, 0.5, 1, [
								["Imagepoint 1", 0.5, 0]
							],
							[-0.46875, -0.02941197156906128, -0.359375, -0.5, -0.484375, -0.9852941036224365, 0.484375, -0.9852941036224365, 0.453125, -0.5, 0.390625, -0.1029409766197205], 0
						]
					]]
				],
				[
					["LiteTween", Z, 8315946232225864],
					["Pin", qc, 778409061618115]
				], !1, !1, 9830989858350564, [], null
			],
			["t20", S, !1, [7853552559856033, 5306691977667506], 0, 0, null, [
					["Default", 5, !1, 1, 0, !1, 4900317172751484, [
						["images/sprite13-sheet0.png", 4390, 0, 0, 57, 664, 1, 0.5087719559669495, 0.9954819083213806, [
								["Imagepoint 1", 0.5087719559669495, 0]
							],
							[-0.399122953414917, -0.9454067349433899, -0.399122953414917, -0.9939758777618408, 0.3969300389289856, -0.9937876462936401, 0.3991230726242065, -0.9457830190658569], 0
						]
					]]
				],
				[], !1, !1, 0x5523fc9576e1c, [], null
			],
			["t21", mc, !1, [], 1, 0, ["images/tiledbackground.png", 713, 0], null, [
				["LiteTween",
					Z, 5521008898927566
				]
			], !1, !1, 0xdccbe45652686, [], null],
			["t22", S, !1, [], 1, 0, null, [
					["Default", 0, !1, 1, 0, !1, 9757685567308040, [
						["images/sprite14-sheet0.png", 385, 1, 1, 35, 4, 1, 0.5142857432365417, 0.5, [],
							[0.4857142567634583, 0, 0.4857142567634583, 0.5, -0.5142857432365417, 0.5, -0.5142857432365417, 0], 0
						],
						["images/sprite14-sheet0.png", 385, 1, 9, 35, 3, 1, 0.5142857432365417, 0.6666666865348816, [],
							[], 0
						]
					]]
				],
				[
					["Pin", qc, 6079697687060783]
				], !1, !1, 0xac74ebd24d8fe, [], null
			],
			["t23", mc, !1, [], 0, 0, ["images/tiledbackground2.png", 42525, 0], null, [], !1, !1, 0xe75131c60057d, [], null],
			["t24", S, !1, [], 1, 0, null, [
					["Default", 5, !1, 1, 0, !1, 9690095021800528, [
						["images/sprite15-sheet0.png", 495, 0, 0, 20, 18, 1, 0.5, 0.5, [],
							[], 0
						]
					]]
				],
				[
					["Pin", qc, 7119145299356644]
				], !1, !1, 5338370563537748, [], null
			]
		],
		[],
		[
			["Layout 1", 480, 854, !0, "Event sheet 1", 8101207093042208, [
					["back", 0, 0xf946e897dc69f, !0, [180, 227, 221], !1, 0.1000000014901161, 0.1000000014901161, 1, !1, 1, 0, 0, [
							[
								[-24, 566, 0, 7, 0, 0, 0, 1, 0.5714285969734192, 1, 0, 0, []], 2, 2, [
									[0],
									[0]
								],
								[
									[0, 4, 1, "90", 0, 0.6, 0]
								],
								[0, "Default", 0, 1]
							],
							[
								[120, 601,
									0, 44, 50, 0, 0, 1, 0.4772727191448212, 0.5600000023841858, 0, 0, []
								], 5, 6, [],
								[
									[0, 0, 3, "50,0", 1, 0.8, 0],
									[]
								],
								[1, "Default", 0, 1]
							]
						],
						[]
					],
					["bav", 1, 0x890c3f3f3f10, !0, [255, 255, 255], !0, 0.5, 0.5, 1, !1, 1, 0, 0, [
							[
								[-178, 518, 0, 1640, 274, 0, 0, 1, 0, 0, 0, 0, []], 23, 1, [],
								[],
								[0, 0]
							],
							[
								[-7, 761, 0, 1508, 98, 0, 0, 1, 0, 0, 0, 0, []], 18, 28, [],
								[],
								[0, 0]
							]
						],
						[]
					],
					["game", 2, 458047829034085, !0, [255, 255, 255], !0, 1, 1, 1, !1, 1, 0, 0, [
							[
								[911, 1044, 0, 57, 664, 0, 0, 1, 0.5087719559669495, 0.9954819083213806, 0, 0, []], 20, 10, [
									[0],
									[1]
								],
								[],
								[0, "Default", 0, 1]
							],
							[
								[676, 1163, 0, 57, 664, 0, 0, 1, 0.5087719559669495,
									0.9954819083213806, 0, 0, []
								], 20, 5, [
									[0],
									[1]
								],
								[],
								[0, "Default", 0, 1]
							],
							[
								[239, 633.0960083007812, 0, 46, 63, 0, 0, 1, 0.4130434691905975, 1, 0, 0, []], 0, 0, [
									[0],
									[0],
									[0]
								],
								[
									[],
									[0, 0, 0, 0, 0, 1],
									[0, 0, 14, "500,-500", 1, 0.9, 0],
									[]
								],
								[0, "Default", 0, 1]
							],
							[
								[402, 72, 0, 124, 64, 0, 0, 1, 0.5161290168762207, 0.671875, 0, 0, []], 17, 11, [],
								[
									[-20, 0, 0, 0, 0, 1]
								],
								[0, "Default", 0, 1]
							],
							[
								[-3, 103, 0, 124, 64, 0, 0, 1, 0.5161290168762207, 0.671875, 0, 0, []], 17, 15, [],
								[
									[-20, 0, 0, 0, 0, 1]
								],
								[0, "Default", 0, 1]
							],
							[
								[639, 135, 0, 124, 64, 0, 0, 1, 0.5161290168762207, 0.671875, 0, 0, []], 17, 25, [],
								[
									[-20,
										0, 0, 0, 0, 1
									]
								],
								[0, "Default", 0, 1]
							],
							[
								[608, 265, 0, 124, 64, 0, 0, 1, 0.5161290168762207, 0.671875, 0, 0, []], 17, 26, [],
								[
									[-20, 0, 0, 0, 0, 1]
								],
								[0, "Default", 0, 1]
							],
							[
								[810, 45, 0, 124, 64, 0, 0, 1, 0.5161290168762207, 0.671875, 0, 0, []], 17, 27, [],
								[
									[-20, 0, 0, 0, 0, 1]
								],
								[0, "Default", 0, 1]
							],
							[
								[239, 1332, 0, 57, 664, 0, 0, 1, 0.5087719559669495, 0.9954819083213806, 0, 0, []], 20, 30, [
									[1],
									[0]
								],
								[],
								[0, "Default", 0, 1]
							],
							[
								[473, 1173, 0, 57, 664, 0, 0, 1, 0.5087719559669495, 0.9954819083213806, 0, 0, []], 20, 31, [
									[0],
									[1]
								],
								[],
								[0, "Default", 0, 1]
							],
							[
								[237.9943389892578, 668.0156860351562,
									0, 33.03840255737305, 35.10330200195313, 0, 0, 1, 0.5, 1, 0, 0, []
								], 19, 29, [],
								[
									[0, 3, 0, "4", 0, 1, 0],
									[]
								],
								[0, "Default", 0, 1]
							],
							[
								[237.4525756835938, 669.4608764648438, 0, 35, 4, 0, 0, 1, 0.5142857432365417, 0.5, 0, 0, []], 22, 34, [],
								[
									[]
								],
								[0, "Default", 0, 1]
							],
							[
								[238, 632, 0, 35, 3, 0, 0, 1, 0.5142857432365417, 0.6666666865348816, 0, 0, []], 22, 35, [],
								[
									[]
								],
								[0, "Default", 1, 1]
							],
							[
								[-63, 757, 0, 1725, 145, 0, 0, 1, 0, 0, 0, 0, []], 21, 33, [],
								[
									[2, 0, 0, "0,30", 1, 3, 0]
								],
								[0, 0]
							]
						],
						[]
					],
					["ui", 3, 7880551160014243, !0, [255, 255, 255], !0, 0, 0, 1, !1, 1, 0, 0, [
							[
								[228, 137, 0, 89.91594696044922, 89.91594696044922,
									0, 0, 0, 0.5, 0.5, 0, 0, []
								], 7, 8, [],
								[
									[0, 1, 0, 0, 0]
								],
								[0, "Default", 0, 1]
							],
							[
								[237, 459, 0, 184.8778991699219, 184.8778991699219, 0, 0, 1, 0.5, 0.5, 0, 0, []], 6, 7, [],
								[
									[2, 0, 3, "0,20", 1, 1.2, 0],
									[0, 0, 0, 1, 1]
								],
								[0, "Default", 0, 1]
							],
							[
								[228, 138, 0, 190, 76, 0, 0, 0, 0.5, 0.5, 0, 0, []], 14, 24, [],
								[
									[0, 1, 0, 0, 0]
								],
								[32, 52, "0123456789", "0", 1, 0, 1, 1, 1, 0, 0, 0]
							],
							[
								[309, 167, 0, 410.508544921875, 230.372802734375, 0, 0, 1, 0.6678321957588196, 0.2554517090320587, 0, 0, []], 8, 9, [],
								[
									[0, 0, 0, 1, 1]
								],
								[0, "Default", 0, 1]
							],
							[
								[81, -103, 0, 76, 76, 0, 0, 1, 0.5, 0.5, 0, 0, []], 12, 19, [],
								[
									[]
								],
								[1, "Default",
									0, 1
								]
							],
							[
								[243, -108, 0, 184.8780059814453, 184.8780059814453, 0, 0, 1, 0.5, 0.5, 0, 0, []], 12, 20, [],
								[
									[]
								],
								[0, "Default", 1, 1]
							],
							[
								[245, -317, 0, 448, 285, 0, 0, 1, 0.5133928656578064, 0.6245614290237427, 0, 0, []], 10, 17, [],
								[
									[0, 0, 3, "0,700", 1, 0.3, 0]
								],
								[0, "Default", 0, 1]
							],
							[
								[239, -550, 0, 322, 83, 0, 0, 1, 0.5031055808067322, 0.4819277226924896, 0, 0, []], 11, 18, [],
								[
									[]
								],
								[0, "Default", 0, 1]
							],
							[
								[243, -393, 0, 188, 62, 0, 0, 1, 0.5, 0.5, 0, 0, []], 13, 22, [],
								[
									[]
								],
								[32, 40, "0123456789", "0", 1, 0, 1, 1, 1, 0, 0, 0]
							],
							[
								[241, -272, 0, 188, 62, 0, 0, 1, 0.5, 0.5, 0, 0, []], 13, 23, [],
								[
									[]
								],
								[32, 40,
									"0123456789", "0", 1, 0, 1, 1, 1, 0, 0, 0
								]
							],
							[
								[304.3999633789063, -319, 0, 20, 18, 0, 0, 1, 0.5, 0.5, 0, 0, []], 24, 12, [],
								[
									[]
								],
								[1, "Default", 0, 1]
							]
						],
						[]
					]
				],
				[],
				[]
			]
		],
		[
			["Event sheet 1", [
				[1, "num", 0, 1044, !1, !1, 7391843447923206, !1],
				[1, "power", 0, 0, !1, !1, 0xa10c0d6e7b3b, !1],
				[1, "best", 0, 0, !1, !1, 5261358787360946, !1],
				[1, "back", 0, 0, !1, !1, 7044493670597222, !1],
				[1, "nextx0", 0, 0, !1, !1, 7884793115841781, !1],
				[1, "nextx2", 0, 0, !1, !1, 0x3d55935c5c31a, !1],
				[1, "tx", 0, 0, !1, !1, 0x6929ebff56ed3, !1],
				[1, "gamepro", 1, "ready", !1, !1, 8228435175990197, !1],
				[1, "nowx",
					0, 0, !1, !1, 0x682e877223afc, !1
				],
				[1, "nextx", 0, 0, !1, !1, 5471074606225359, !1],
				[1, "now", 0, 0, !1, !1, 7135999767920842, !1],
				[1, "score", 0, 0, !1, !1, 0xc84ec2c07b30c, !1],
				[0, null, !1, null, 9325887974848032, [
						[-1, Q.prototype.p.Om, null, 1, !1, !1, !1, 6859059433406308, !1]
					],
					[
						[-1, Q.prototype.k.nq, null, 0xe67c0bb01e25b, !1],
						[-1, Q.prototype.k.sb, null, 8381601021978332, !1, [
							[11, "score"],
							[7, [0, 0]]
						]],
						[-1, Q.prototype.k.sb, null, 0xc254f49848863, !1, [
							[11, "gamepro"],
							[7, [2, "ready"]]
						]],
						[0, oc.prototype.k.Wm, "Bullet", 5637389712033021, !1, [
							[0, [0,
								0
							]]
						]],
						[0, oc.prototype.k.Vm, "Bullet", 5195211848662504, !1, [
							[0, [0, 0]]
						]],
						[0, oc.prototype.k.Ym, "Bullet", 6348352990279919, !1, [
							[0, [0, 0]]
						]],
						[2, S.prototype.k.Yj, null, 770763744275402, !1],
						[24, qc.prototype.k.ye, "Pin", 0xe65926fd94e2d, !1, [
							[4, 10],
							[3, 1]
						]],
						[24, S.prototype.k.Ae, null, 7860473964662377, !1, [
							[3, 0]
						]],
						[11, qc.prototype.k.ye, "Pin", 0x4109c47f9a8a4, !1, [
							[4, 10],
							[3, 1]
						]],
						[12, qc.prototype.k.ye, "Pin", 6585475515628359, !1, [
							[4, 10],
							[3, 1]
						]],
						[13, qc.prototype.k.ye, "Pin", 5340913201635483, !1, [
							[4, 10],
							[3, 1]
						]],
						[-1, Q.prototype.k.sb,
							null, 0x4fddcd4e5d8ac, !1, [
								[11, "back"],
								[7, [19, Q.prototype.J.gi, [
									[0, 1],
									[0, 2],
									[0, 3],
									[0, 3],
									[0, 5]
								]]]
							]
						],
						[-1, Q.prototype.k.Sh, null, 5241336501544664, !1, [
							[0, [1, 0.2]]
						]],
						[-1, Q.prototype.k.sb, null, 6619278807778575, !1, [
							[11, "best"],
							[7, [20, 16, nc.prototype.J.Nm, !0, null, [
								[2, "p"]
							]]]
						]]
					],
					[
						[0, null, !1, null, 8400704550802204, [
								[16, nc.prototype.p.Um, null, 0, !1, !1, !1, 0xf1f25506f00a9, !1, [
									[1, [2, "p"]]
								]]
							],
							[
								[-1, Q.prototype.k.sb, null, 0x8a37ef9518d69, !1, [
									[11, "best"],
									[7, [20, 16, nc.prototype.J.Nm, !0, null, [
										[2, "p"]
									]]]
								]]
							]
						],
						[0, null, !1, null,
							7389062669048663, [
								[16, nc.prototype.p.Um, null, 0, !1, !0, !1, 0x4858cdc5a8d50, !1, [
									[1, [2, "p"]]
								]]
							],
							[
								[-1, Q.prototype.k.sb, null, 5430546727104134, !1, [
									[11, "best"],
									[7, [0, 0]]
								]]
							]
						]
					]
				],
				[0, null, !1, null, 434232189243945, [
						[3, T.prototype.p.Nh, null, 1, !1, !1, !1, 4545827406202909, !1],
						[-1, Q.prototype.p.we, null, 0, !1, !1, !1, 4915491939436138, !1, [
							[11, "gamepro"],
							[8, 0],
							[7, [2, "start"]]
						]]
					],
					[
						[0, rc.prototype.k.uq, "Timer", 0xe6c1139166ffb, !1, [
							[0, [0, 10]],
							[3, 1],
							[1, [2, "add"]]
						]]
					]
				],
				[0, null, !1, null, 0xa2c21a9bec42b, [
						[-1, Q.prototype.p.Tp, null, 0, !1, !1, !1, 9669989972674804, !1]
					],
					[
						[-1, Q.prototype.k.qq, null, 95774055465082, !1, [
							[0, [4, [20, 5, S.prototype.J.Be, !1, null],
								[0, 140]
							]]
						]],
						[14, lc.prototype.k.lk, null, 6959384860999426, !1, [
							[7, [23, "score"]]
						]]
					],
					[
						[0, null, !1, null, 0xb94a56fef85f9, [
								[13, lc.prototype.p.Tm, null, 0, !1, !1, !0, 0x7617be05f85cc, !1, [
									[0, [0, 22]]
								]]
							],
							[
								[13, lc.prototype.k.lk, null, 0x533fae9599d34, !1, [
									[7, [23, "score"]]
								]]
							]
						],
						[0, null, !1, null, 6241855711537887, [
								[13, lc.prototype.p.Tm, null, 0, !1, !1, !0, 0x95c9f9a948002, !1, [
									[0, [0, 23]]
								]]
							],
							[
								[13, lc.prototype.k.lk, null,
									0xaaa8e1aac1103, !1, [
										[7, [23, "best"]]
									]
								]
							]
						],
						[0, null, !1, null, 0x45d3a1943381d, [
								[22, S.prototype.p.qf, null, 0, !1, !1, !1, 6109734039122462, !1, [
									[8, 0],
									[0, [0, 1]]
								]]
							],
							[
								[22, S.prototype.k.Xm, null, 5775381970737824, !1, [
									[4, 19],
									[7, [0, 1]]
								]]
							]
						],
						[0, null, !1, null, 9495527241723662, [
								[22, S.prototype.p.qf, null, 0, !1, !1, !1, 0xe39de2beb94b1, !1, [
									[8, 0],
									[0, [0, 0]]
								]]
							],
							[
								[22, S.prototype.k.Xm, null, 0x5ecfea0bebbf6, !1, [
									[4, 19],
									[7, [0, 0]]
								]]
							]
						]
					]
				],
				[0, null, !1, null, 61333747361533, [
						[3, T.prototype.p.Mh, null, 1, !1, !1, !1, 0x42102adfbdbad, !1, [
							[4, 6]
						]]
					],
					[
						[6, pc.prototype.k.jg,
							"Fade", 0x8336fa0e194d5, !1
						],
						[8, pc.prototype.k.jg, "Fade", 7501467416795499, !1],
						[5, Z.prototype.k.Oh, "LiteTween", 7332177753111449, !1, [
							[3, 0],
							[3, 0],
							[0, [20, 0, S.prototype.J.Be, !1, null]]
						]],
						[5, Z.prototype.k.Oh, "LiteTween", 0x9e41f50338ec3, !1, [
							[3, 1],
							[3, 0],
							[0, [20, 0, S.prototype.J.kg, !1, null]]
						]],
						[5, Z.prototype.k.Ph, "LiteTween", 9358483570476018, !1, [
							[3, 0]
						]],
						[-1, Q.prototype.k.Sh, null, 0x6719ab886a013, !1, [
							[0, [1, 0.4]]
						]],
						[-1, Q.prototype.k.sb, null, 9281178315290652, !1, [
							[11, "gamepro"],
							[7, [2, "start"]]
						]],
						[0, S.prototype.k.ze,
							null, 0xf7425b11bedb3, !1, [
								[10, 0],
								[3, 1]
							]
						],
						[15, pc.prototype.k.jg, "Fade", 9421399820152916, !1],
						[14, pc.prototype.k.jg, "Fade", 5588035552256987, !1],
						[7, pc.prototype.k.jg, "Fade", 0xae736edcaf776, !1]
					]
				],
				[0, null, !1, null, 0xf1673beb68714, [
						[0, S.prototype.p.Km, null, 0, !1, !1, !1, 6642991046955313, !1, [
							[8, 4],
							[0, [0, 1E3]]
						]],
						[-1, Q.prototype.p.wq, null, 0, !1, !1, !1, 9399435248107336, !1]
					],
					[
						[4, kc.prototype.k.Play, null, 8819222745039483, !1, [
							[2, ["fall2", !1]],
							[3, 0],
							[0, [0, 0]],
							[1, [2, ""]]
						]],
						[0, oc.prototype.k.jk, "Bullet", 5155962753767553, !1, [
							[3, 0]
						]],
						[0, S.prototype.k.Ae, null, 4877401196555738, !1, [
							[3, 0]
						]],
						[-1, Q.prototype.k.Sh, null, 5388305326574935, !1, [
							[0, [1, 0.3]]
						]],
						[-1, Q.prototype.k.sb, null, 601678754754085, !1, [
							[11, "gamepro"],
							[7, [2, "end"]]
						]],
						[7, S.prototype.k.Ae, null, 7577688877566031, !1, [
							[3, 0]
						]],
						[14, lc.prototype.k.Ae, null, 9497309669635472, !1, [
							[3, 0]
						]],
						[15, S.prototype.k.Ae, null, 6140522809977068, !1, [
							[3, 0]
						]],
						[10, Z.prototype.k.Ph, "LiteTween", 8579581807079062, !1, [
							[3, 1]
						]]
					],
					[
						[0, null, !1, null, 0xd28ef80a38f14, [
								[-1, Q.prototype.p.we, null, 0, !1, !1, !1,
									9495880445554952, !1, [
										[11, "score"],
										[8, 4],
										[7, [23, "best"]]
									]
								]
							],
							[
								[24, S.prototype.k.Ae, null, 542906379293247, !1, [
									[3, 1]
								]],
								[-1, Q.prototype.k.sb, null, 0x638eddc99706d, !1, [
									[11, "best"],
									[7, [23, "score"]]
								]],
								[16, nc.prototype.k.Zm, null, 9905999318925496, !1, [
									[1, [2, "p"]],
									[7, [23, "best"]]
								]]
							]
						]
					]
				],
				[0, null, !1, null, 5472791932042609, [
						[3, T.prototype.p.Mh, null, 1, !1, !1, !1, 6215698475900057, !1, [
							[4, 12]
						]],
						[12, S.prototype.p.Wp, null, 0, !1, !1, !1, 6435330077318188, !1]
					],
					[],
					[
						[0, null, !1, null, 0xf9914733102a3, [
								[-1, Q.prototype.p.we, null, 0, !1, !1, !1, 9669983665505672, !1, [
									[11, "score"],
									[8, 4],
									[7, [23, "best"]]
								]]
							],
							[
								[24, S.prototype.k.Ae, null, 0xd426bb3641dd1, !1, [
									[3, 1]
								]],
								[-1, Q.prototype.k.sb, null, 0x5fa93541b9e89, !1, [
									[11, "best"],
									[7, [23, "score"]]
								]],
								[16, nc.prototype.k.Zm, null, 6715549878756293, !1, [
									[1, [2, "p"]],
									[7, [23, "best"]]
								]]
							]
						],
						[0, null, !1, null, 6868392072984013, [
								[12, S.prototype.p.qf, null, 0, !1, !1, !1, 0x8936a8b6250b9, !1, [
									[8, 0],
									[0, [0, 0]]
								]]
							],
							[
								[-1, Q.prototype.k.Vp, null, 5280293961341887, !1, [
									[6, "Layout 1"]
								]]
							]
						],
						[0, null, !1, null, 9105628932619564, [
								[12, S.prototype.p.qf,
									null, 0, !1, !1, !1, 0x68e738cd1ec7c, !1, [
										[8, 0],
										[0, [0, 1]]
									]
								]
							],
							[
								[-1, Q.prototype.k.oq, null, 6605481645967859, !1]
							]
						]
					]
				],
				[0, null, !1, null, 5648933387994362, [
						[3, T.prototype.p.Nh, null, 1, !1, !1, !1, 906540489843449, !1],
						[-1, Q.prototype.p.we, null, 0, !1, !1, !1, 4563758128494734, !1, [
							[11, "gamepro"],
							[8, 0],
							[7, [2, "start"]]
						]],
						[0, S.prototype.p.$j, null, 0, !1, !1, !1, 7345023811076289, !1, [
							[10, 0]
						]]
					],
					[
						[19, Z.prototype.k.Ph, "LiteTween", 0xedb515c10b920, !1, [
							[3, 0]
						]],
						[19, Z.prototype.k.ik, "LiteTween", 0xb66cfebe264eb, !1, [
							[0, [0, 1]]
						]],
						[4, kc.prototype.k.Play,
							null, 6670628138222723, !1, [
								[2, ["compressing", !1]],
								[3, 0],
								[0, [0, -10]],
								[1, [2, "222"]]
							]
						]
					],
					[
						[0, null, !1, null, 9853927989541664, [
								[22, S.prototype.p.qf, null, 0, !1, !1, !1, 5975479893115909, !1, [
									[8, 0],
									[0, [0, 1]]
								]]
							],
							[
								[0, qc.prototype.k.ye, "Pin", 0x3aae6c311778d, !1, [
									[4, 22],
									[3, 1]
								]]
							]
						]
					]
				],
				[0, null, !1, null, 289847928848336, [
						[3, T.prototype.p.hk, null, 1, !1, !1, !1, 6336859063915032, !1],
						[-1, Q.prototype.p.we, null, 0, !1, !1, !1, 9774906530479778, !1, [
							[11, "gamepro"],
							[8, 0],
							[7, [2, "start"]]
						]],
						[0, S.prototype.p.$j, null, 0, !1, !1, !1, 8835900095435582, !1, [
							[10, 0]
						]]
					],
					[
						[0, qc.prototype.k.xq, "Pin", 4925785938626632, !1],
						[19, Z.prototype.k.Qh, "LiteTween", 6412381753453254, !1, [
							[3, 0]
						]],
						[19, S.prototype.k.Yj, null, 7882897262782334, !1],
						[22, S.prototype.k.Yj, null, 0xbf8fc63caf682, !1],
						[-1, Q.prototype.k.sb, null, 7627234363134008, !1, [
							[11, "power"],
							[7, [22, 19, "LiteTween", Z.prototype.J.mq, !1, null]]
						]],
						[0, Z.prototype.k.Oh, "LiteTween", 6711819406697816, !1, [
							[3, 0],
							[3, 1],
							[0, [6, [0, 420],
								[23, "power"]
							]]
						]],
						[0, Z.prototype.k.Oh, "LiteTween", 0x84510a354606a, !1, [
							[3, 1],
							[3, 1],
							[0, [6, [0, -600],
								[23, "power"]
							]]
						]],
						[0, Z.prototype.k.Ph, "LiteTween", 4576330550366662, !1, [
							[3, 0]
						]],
						[0, Z.prototype.k.ik, "LiteTween", 5374619994723349, !1, [
							[0, [6, [1, 0.7],
								[6, [23, "power"],
									[1, 1.4]
								]
							]]
						]],
						[4, kc.prototype.k.Play, null, 9022325534256046, !1, [
							[2, ["jump", !1]],
							[3, 0],
							[0, [0, 0]],
							[1, [2, ""]]
						]],
						[-1, Q.prototype.k.sb, null, 9503011517939246, !1, [
							[11, "gamepro"],
							[7, [2, "start"]]
						]],
						[4, kc.prototype.k.Qh, null, 5132096703495314, !1, [
							[1, [2, "222"]]
						]],
						[0, S.prototype.k.ze, null, 9980369046214, !1, [
							[10, 0],
							[3, 0]
						]]
					]
				],
				[0, null, !1, null, 9940602742997988, [
						[0, Z.prototype.p.ck, "LiteTween", 1, !1, !1, !1, 7163945442523732, !1],
						[-1, Q.prototype.p.we, null, 0, !1, !1, !1, 0x6010e3cd60cc, !1, [
							[11, "gamepro"],
							[8, 0],
							[7, [2, "start"]]
						]]
					],
					[
						[0, oc.prototype.k.jk, "Bullet", 6716459003615925, !1, [
							[3, 1]
						]],
						[0, oc.prototype.k.Ym, "Bullet", 5201731553578857, !1, [
							[0, [6, [0, 40],
								[6, [23, "power"],
									[1, 1.1]
								]
							]]
						]],
						[0, oc.prototype.k.Wm, "Bullet", 319011772988914, !1, [
							[0, [0, 1200]]
						]],
						[0, oc.prototype.k.Vm, "Bullet", 6753031936784227, !1, [
							[0, [0, 500]]
						]]
					]
				],
				[0, null, !1, null, 896774263808828, [
						[0, S.prototype.p.aq, null,
							0, !1, !1, !0, 772741576822925, !1, [
								[4, 20]
							]
						],
						[-1, Q.prototype.p.we, null, 0, !1, !1, !1, 0xa10c1eb428f6a, !1, [
							[11, "gamepro"],
							[8, 0],
							[7, [2, "start"]]
						]],
						[0, S.prototype.p.Km, null, 0, !1, !1, !1, 5084622340137001, !1, [
							[8, 5],
							[0, [20, 20, S.prototype.J.Mm, !1, null, [
								[0, 1]
							]]]
						]]
					],
					[
						[0, oc.prototype.k.jk, "Bullet", 0x56e95abd12b01, !1, [
							[3, 0]
						]],
						[4, kc.prototype.k.Play, null, 0x78378770a1428, !1, [
							[2, ["land", !1]],
							[3, 0],
							[0, [0, 0]],
							[1, [2, ""]]
						]],
						[0, S.prototype.k.ze, null, 6053225220438758, !1, [
							[10, 0],
							[3, 1]
						]],
						[-1, Q.prototype.k.sb, null, 0xc2ecb72a29898, !1, [
							[11, "nowx"],
							[7, [20, 20, S.prototype.J.Mm, !1, null, [
								[0, 1]
							]]]
						]],
						[0, S.prototype.k.sq, null, 0xd60370296df16, !1, [
							[0, [5, [23, "nowx"],
								[0, 2]
							]]
						]],
						[-1, Q.prototype.k.xe, null, 0x923a9c5ca9b39, !1, [
							[4, 22],
							[5, [2, "game"]],
							[0, [20, 0, S.prototype.J.Be, !1, null]],
							[0, [20, 0, S.prototype.J.kg, !1, null]]
						]],
						[-1, Q.prototype.k.xe, null, 0x8fd027fee3207, !1, [
							[4, 22],
							[5, [2, "game"]],
							[0, [20, 0, S.prototype.J.Be, !1, null]],
							[0, [5, [20, 0, S.prototype.J.kg, !1, null],
								[0, 2]
							]]
						]],
						[-1, Q.prototype.k.xe, null, 793672782771893, !1, [
							[4, 19],
							[5, [2, "game"]],
							[0, [20, 0, S.prototype.J.Be, !1, null]],
							[0, [20, 0, S.prototype.J.kg, !1, null]]
						]],
						[19, Z.prototype.k.ik, "LiteTween", 8435823033956059, !1, [
							[0, [1, 0.4]]
						]],
						[19, Z.prototype.k.Qh, "LiteTween", 6133655564516449, !1, [
							[3, 2]
						]],
						[22, S.prototype.k.rq, null, 0x718fcdfde7cba, !1, [
							[0, [0, 1]]
						]]
					],
					[
						[0, null, !1, null, 6176052146237546, [
								[22, S.prototype.p.qf, null, 0, !1, !1, !1, 9998582758623114, !1, [
									[8, 0],
									[0, [0, 1]]
								]]
							],
							[
								[0, qc.prototype.k.ye, "Pin", 5270818523038034, !1, [
									[4, 22],
									[3, 1]
								]]
							]
						],
						[0, null, !1, null, 8117304757518492, [],
							[
								[-1, Q.prototype.k.sb, null,
									0xfd884823c9a8d, !1, [
										[11, "gamepro"],
										[7, [2, "ready"]]
									]
								],
								[-1, Q.prototype.k.Sh, null, 6909397420912554, !1, [
									[0, [1, 0.1]]
								]],
								[19, Z.prototype.k.pq, "LiteTween", 8456817644985129, !1, [
									[3, 0]
								]]
							]
						],
						[0, null, !1, null, 0x5b49356df5f84, [
								[20, S.prototype.p.$j, null, 0, !1, !0, !1, 7183247681425923, !1, [
									[10, 0]
								]]
							],
							[
								[20, S.prototype.k.ze, null, 9946579645101004, !1, [
									[10, 0],
									[3, 1]
								]],
								[-1, Q.prototype.k.sb, null, 8856716257299668, !1, [
									[11, "num"],
									[7, [4, [23, "num"],
										[19, Q.prototype.J.random, [
											[0, 80],
											[0, 260]
										]]
									]]
								]],
								[-1, Q.prototype.k.xe, null, 0x8d5f2ca1b3a24, !1, [
									[4, 20],
									[5, [2, "game"]],
									[0, [23, "num"]],
									[0, [19, Q.prototype.J.random, [
										[0, 1100],
										[0, 1300]
									]]]
								]],
								[20, S.prototype.k.kk, null, 9593491112965142, !1, [
									[10, 1],
									[7, [4, [23, "num"],
										[0, 1]
									]]
								]],
								[20, S.prototype.k.ak, null, 409232293298292, !1],
								[20, S.prototype.k.ze, null, 0x64639125ae57a, !1, [
									[10, 0],
									[3, 0]
								]],
								[-1, Q.prototype.k.sb, null, 9170381824637244, !1, [
									[11, "num"],
									[7, [4, [23, "num"],
										[19, Q.prototype.J.random, [
											[0, 80],
											[0, 260]
										]]
									]]
								]],
								[-1, Q.prototype.k.xe, null, 0x66e733fbda268, !1, [
									[4, 20],
									[5, [2, "game"]],
									[0, [23, "num"]],
									[0, [19, Q.prototype.J.random, [
										[0, 1100],
										[0, 1300]
									]]]
								]],
								[20, S.prototype.k.kk, null, 9000543625703527, !1, [
									[10, 1],
									[7, [4, [23, "num"],
										[0, 2]
									]]
								]],
								[20, S.prototype.k.ak, null, 5851104501377916, !1],
								[20, S.prototype.k.ze, null, 6931554761414712, !1, [
									[10, 0],
									[3, 0]
								]],
								[-1, Q.prototype.k.sb, null, 0xc99c650992eec, !1, [
									[11, "num"],
									[7, [4, [23, "num"],
										[19, Q.prototype.J.random, [
											[0, 80],
											[0, 260]
										]]
									]]
								]],
								[-1, Q.prototype.k.xe, null, 6831765028067612, !1, [
									[4, 20],
									[5, [2, "game"]],
									[0, [23, "num"]],
									[0, [19, Q.prototype.J.random, [
										[0, 1100],
										[0, 1300]
									]]]
								]],
								[20, S.prototype.k.kk, null, 9283437742393926, !1, [
									[10, 1],
									[7, [4, [23, "num"],
										[0, 3]
									]]
								]],
								[20, S.prototype.k.ak, null, 0x4eeaf54bdc2c1, !1],
								[20, S.prototype.k.ze, null, 6607998958877614, !1, [
									[10, 0],
									[3, 0]
								]],
								[21, mc.prototype.k.mk, null, 6766140545258478, !1, [
									[0, [4, [20, 21, mc.prototype.J.ok, !1, null],
										[0, 1500]
									]]
								]],
								[18, mc.prototype.k.mk, null, 0x9fee9257f696a, !1, [
									[0, [4, [20, 18, mc.prototype.J.ok, !1, null],
										[0, 1500]
									]]
								]],
								[23, mc.prototype.k.mk, null, 4534847886971523, !1, [
									[0, [4, [20, 23, mc.prototype.J.ok, !1, null],
										[0, 1500]
									]]
								]],
								[-1, Q.prototype.k.Qp, null, 0xa404b76b81c6c, !1, [
									[11, "score"],
									[7, [0, 1]]
								]]
							]
						]
					]
				],
				[0, null, !1, null, 0x5c845745c10ff, [
						[-1, Q.prototype.p.Sp, null, 0, !1, !1, !1, 0x7455d1ae3cd02, !1, [
							[0, [19, Q.prototype.J.gi, [
								[1, 1.5],
								[0, 2],
								[0, 3],
								[0, 4]
							]]]
						]]
					],
					[
						[-1, Q.prototype.k.xe, null, 0x8c68469bd02c3, !1, [
							[4, 17],
							[5, [2, "game"]],
							[0, [4, [20, 0, S.prototype.J.Be, !1, null],
								[19, Q.prototype.J.gi, [
									[0, 500],
									[0, 540],
									[0, 580],
									[0, 600]
								]]
							]],
							[0, [19, Q.prototype.J.random, [
								[0, 50],
								[0, 300]
							]]]
						]]
					]
				],
				[0, null, !1, null, 0x54508cb5d5673, [
						[5, Z.prototype.p.ck, "LiteTween", 1, !1, !1, !1, 435355811418078, !1]
					],
					[
						[5, qc.prototype.k.ye, "Pin",
							8085137565321066, !1, [
								[4, 0],
								[3, 1]
							]
						]
					]
				],
				[0, null, !1, null, 4783707913439428, [
						[19, Z.prototype.p.Sm, "LiteTween", 1, !1, !1, !1, 0xe342b0917d97, !1]
					],
					[
						[-1, Q.prototype.k.sb, null, 923285666140161, !1, [
							[11, "gamepro"],
							[7, [2, "start"]]
						]]
					]
				]
			]]
		], "media/", !0, 480, 854, 4, !0, !0, !1, "1.0.0.0", !0, !1, 0, 0, 36, !1, !0, 2, []
	]
};