# linklist-to-table
You have a list of links but you want CSV or SQL with metadata, or at least the page title.

# Use
1. 'node install'
1. Paste a txt list of urls into links.txt
1. 'node index'
1. Obtain the output at output.csv
1. You may need to clean the output a bit. I noticed some line breaks left in. Not sure why.

# Todo
1. Implement SQL output using https://www.npmjs.com/package/csv2sql-lite