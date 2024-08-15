package matrix

import (
	"fmt"
	"testing"
)

func TestSpiralWalk(t *testing.T) {
	ma := NewMatrix(4, 5)
	PrintMatrix(ma)
	result := SpiralWalk(ma)
	fmt.Printf("%v\n, l: %d", result, len(result))
}
