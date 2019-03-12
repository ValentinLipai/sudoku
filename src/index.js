module.exports = function solveSudoku(matrix) {
	solve(matrix);
	return matrix;
}

function solve(matrix)
{
	for (var row = 0; row <= 8; row++)
	{
		for (var col = 0; col <= 8; col++)
		{
			if (matrix[row][col] == 0)
			{
				for (var num = 1; num <= 9; num++)
				{
					if (findInSquare(row, col, matrix, num)&&findInRow(num, row, matrix)&&findInCol(num, col, matrix))
					{
						matrix[row][col] = num;
						if (solve(matrix)) 
						{
							return true;
						}
						else
						{
							matrix[row][col] = 0;
						};
					};
				};
				return false;
			};
		};
	};
	return true;
}


function findInRow(num, row, matrix)
{	
	for (let c = 0; c < 9; c++)
	{
		if ( matrix[row][c] == num ) return false;	
	}
	return true;
}

function findInCol(num, col, matrix)
{	
	for (let i = 0; i < 9; i++)
	{
		if (matrix[i][col] == num) return false;
	}
	return true;
}

function findInSquare(row, col, matrix, num)
{
	let srNum = Math.floor((row / 3)) * 3;
	let scNum = Math.floor((col / 3)) * 3;
	for (let sr = 0; sr < 3; sr++)
	{
		for (let sc = 0; sc < 3; sc++)
		{
			if (matrix[srNum + sr][scNum + sc] == num) return false;
		};
	};
	return true;
};
