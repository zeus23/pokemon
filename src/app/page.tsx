"use client"
import { useState } from 'react';

import Header from './components/header';
import { useDebounce } from './hooks/useDebounce';
import { useGetAllPokemonsQuery, useGetPokemonByNameQuery } from './store/services/pokemonApi';
import Footer from './components/footer';
import { IPokemon } from './types';
import PokemonCard from './components/pokemonCard';
import FullLoader from './components/fullLoader';
import PokemonModal from './components/pokemonModal';
import NotFound from './components/notFound';

export default function Home() {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [currentPokemon, setCurrentPokemon] = useState(null);
	const [queryParam, setQueryParam] = useState({});
	const [searchQuery, setSearchQuery] = useState<string>('');

	const debouncedSearchQuery = useDebounce(searchQuery.toLowerCase(), 500);
	const { data: allPokemons, error: allError, isLoading: allLoading } = useGetAllPokemonsQuery(queryParam);
	const { data: searchResult, error: searchError, isLoading: searchLoading } = useGetPokemonByNameQuery(debouncedSearchQuery, { skip: debouncedSearchQuery === '' });

	const handleSearchInput = (value: string) => {
		setSearchQuery(value)
	}

	const handleNext = (nextParam: string) => {
		if (nextParam) {
			const queryParams = new URLSearchParams(nextParam.substring(nextParam.indexOf('?')));
			const offset = queryParams.get('offset');
			const limit = queryParams.get('limit');
			setQueryParam({ offset, limit });
		}
	}

	const handlePrevious = (prevParam: string) => {
		if (prevParam) {
			const queryParams = new URLSearchParams(prevParam.substring(prevParam.indexOf('?')));
			const offset = queryParams.get('offset');
			const limit = queryParams.get('limit');
			setQueryParam({ offset, limit });
		}
	}

	const handleOpenModal = (pokemon: any) => {
		setCurrentPokemon(pokemon);
		setShowModal(true);
	}

	const handleCloseModal = () => {
		setCurrentPokemon(null);
		setShowModal(false);
	}

	if (allLoading) {
		return (
			<FullLoader />
		)
	}

	return (
		<main className="flex min-h-screen flex-col items-center">
			<Header
				searchQuery={searchQuery}
				handleChangeText={(value: string) => handleSearchInput(value)}
			/>
			<div className='w-10/12 flex flex-wrap p-10 items-center justify-between'>
				{
					// show search result if search query is not empty
					debouncedSearchQuery !== ''
						?
						<>
							{
								searchResult
									?
									<>
										{
											searchResult.name === debouncedSearchQuery || searchResult.id === parseFloat(debouncedSearchQuery)
												?
												<div className='w-full flex items-center justify-center'>
													<PokemonCard item={searchResult.forms[0]} handleClick={(value: any) => handleOpenModal(value)} />
												</div>
												:
												<NotFound />
										}
									</>
									:
									<NotFound />
							}
						</>
						:
						// show all pokemon with pagination
						<>
							{
								allPokemons && allPokemons.results.map((item: IPokemon, index: number) => {
									return (
										<div key={index}>
											<PokemonCard item={item} handleClick={(value: any) => handleOpenModal(value)} />
										</div>
									)
								})
							}
						</>
				}
				{/* Dispaly modal with pokemon info */}
				<PokemonModal
					isVisible={showModal}
					onClose={handleCloseModal}
					pokemonData={currentPokemon}
				/>
			</div>
			{
				debouncedSearchQuery === '' &&
				<Footer
					pokemonData={allPokemons}
					clickNext={(value: string) => handleNext(value)}
					clickPrevious={(value: string) => handlePrevious(value)}
				/>
			}
		</main>
	)
}
