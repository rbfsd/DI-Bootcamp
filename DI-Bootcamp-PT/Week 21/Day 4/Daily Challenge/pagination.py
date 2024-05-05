class Pagination():
    def __init__(self, items=None, pageSize=10):
        self.items = items if items is not None else []
        self.pageSize = int(pageSize) if pageSize else 10
        self.totalPages = -(-len(self.items) // self.pageSize)  # Calculating total pages
        self.currentPage = 1

    def getVisibleItems(self):
        start_idx = (self.currentPage - 1) * self.pageSize
        end_idx = start_idx + self.pageSize
        return self.items[start_idx:end_idx]
    
    def prevPage(self):
        self.currentPage = min(self.currentPage - 1, 1)
        return self

    def nextPage(self):
        self.currentPage = min(self.currentPage + 1, self.totalPages)
        return self

    def firstPage(self):
        self.currentPage = 1
        return self

    def lastPage(self):
        self.currentPage = self.totalPages
        return self

    def goToPage(self, pageNum):
        page = int(pageNum)
        self.currentPage = max(1, min(page, self.totalPages))
        return self
    
alphabetList = list("abcdefghijklmnopqrstuvwxyz")
p = Pagination(alphabetList, 7)

print(p.getVisibleItems())  # ["a", "b", "c", "d"]

p.nextPage().nextPage()
print(p.getVisibleItems())  # ["e", "f", "g", "h"]

p.lastPage()
print(p.getVisibleItems())  # ["y", "z"]

p.goToPage(10)
print(p.currentPage)  # Should print 5 since there are only 5 total pages
 