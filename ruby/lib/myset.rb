class MySet
	def initialize()
		@objects = []
		@count = 0
	end

	def add(value)
		@objects[@count] = value
		@count += 1
	end

	def count() 
		return @count
	end

	def indexOf(value)
		for i in 0..(@count - 1)
			if @objects[i] == value then
				return i
			end
		end

		raise "fuckkkkkkkk"
	end

	def any(criteria)
		for i in 0..(@count - 1)
			if criteria.call(@objects[i]) then
				return true
			end
		end
		return false
	end
end