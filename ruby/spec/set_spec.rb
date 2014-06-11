require 'myset'

RSpec.describe MySet do
	describe 'add' do
		before(:each) do
			@set = MySet.new
		end

		it 'increments the count' do
			@set.add("hello")
			expect(@set.count()).to eq(1)
			@set.add("agh")
			expect(@set.count()).to eq(2)
		end

		it 'holds two added objects' do
			@set.add("hello")
			@set.add("agh")
			expect(@set.indexOf("agh")).to eq(1)
			expect(@set.indexOf("hello")).to eq(0)
		end
	end

	describe 'indexOf' do
		it 'throws an exception if it does not contain object' do
			set = MySet.new
			set.add(44)
			set.add(102)
			expect { set.indexOf(55) }.to raise_error
		end
	end

	describe 'any' do
		before(:each) do
			@set = MySet.new
			@set.add(44)
			@set.add(102)
			@set.add(1022)
		end

		it 'returns true when any object is found' do
			expect(@set.any(method(:greaterThan55))).to eq(true)
		end

		it 'returns false when any object is not found' do
			expect(@set.any(method(:lessThan44))).to eq(false)
		end
	end

	def greaterThan55(value)
		return value > 55
	end

	def lessThan44(value)
		puts value
		return value < 44
	end
end