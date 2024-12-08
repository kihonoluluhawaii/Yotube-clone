import { useQuery } from '@tanstack/react-query';
import { getSearchResults } from '@/services/search.ts';

export const useSearch = (query: string) => {
  const { data } = useQuery({
    queryKey: ['search', query],
    queryFn: () => getSearchResults(query),
    enabled: !!query,
  });

  return { data };
};
