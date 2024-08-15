package matrix

import "fmt"

func SpiralWalk(ma [][]int) []int {
	n := len(ma[0])
	m := len(ma)
	result := []int{}
	y, x := 0, 0
	d := 0
	//          TL TR  BR  BL
	//           E  S   W  N
	xi := [4]int{1, 0, -1, 0}
	yi := [4]int{0, 1, 0, -1}
	// We go from top-left to the top-right, so the first boundary that we
	// will hit is the top-right.
	//                     TR        BR          BL        TL
	//                    {(n-1, 0), (n-1, m-1), (0, m-1), (0, 1)}
	bdrx := [4]int{n - 1, n - 1, 0, 0}
	bdry := [4]int{0, m - 1, m - 1, 1}
	bdrxi := [4]int{-1, -1, 1, 1}
	bdryi := [4]int{1, -1, -1, 1}

	for i := 0; i <= m*n; i++ {
		// Current boundaries.
		cbdrx := bdrx[d]
		cbdry := bdry[d]
		result = append(result, ma[y][x])

		if y == cbdry && x == cbdrx {
			prevd := d
			d = (d + 1) % 4   // switch direction
			dd := (d + 3) % 4 // opposite element on the diagonal of the new direction

			// Difference between current boundary and the diagonally opposite one.
			ddx := bdrx[d] - bdrx[dd]
			ddy := bdry[d] - bdry[dd]

			// Check if boundaries on diagonals are swapped.
			//                                   TL┌───┐BL
			//                     Anti-digonal    │   │
			//                      ┌──swap───────▶│   │
			//                      │              │   │
			//                      │            TR└───┘BR
			// TL┌───┐TR            │
			//   │   │              │
			//   │   │──────────────┤
			//   │   │              │
			// BL└───┘BR            │
			//                      │            BR┌───┐TR
			//                      │ Diagonal     │   │
			//                      └───swap──────▶│   │
			//                                     │   │
			//                                   BL└───┘TL
			if ddx == 1 && ddy == 1 ||
				ddx == -1 && ddy == 1 ||
				// squared matrix case with odd sizes
				ddx == 0 && ddy == 0 {
				break
			}

			// collapse matrix
			bdrx[prevd], bdry[prevd] = cbdrx+bdrxi[prevd], cbdry+bdryi[prevd]
		}

		y, x = y+yi[d], x+xi[d]
	}

	return result
}

func NewMatrix(m, n int) [][]int {
	ma := make([][]int, n)
	count := 1

	for i := 0; i < n; i++ {
		ma[i] = make([]int, m)
		for j := 0; j < m; j++ {
			ma[i][j] = count
			count++
		}
	}

	return ma
}

func PrintMatrix(ma [][]int) {
	n := len(ma)
	for i := 0; i < n; i++ {
		fmt.Printf("%v\n", ma[i])
	}
}
