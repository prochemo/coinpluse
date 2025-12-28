import React from 'react';
import { DataTable } from '@/components/DataTable';

export const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image skeleton animate-pulse" />
        <div className="info">
          <div className="header-line-sm skeleton animate-pulse" />
          <div className="header-line-lg skeleton animate-pulse" />
        </div>
      </div>
      <div className="chart">
        <div className="chart-skeleton skeleton animate-pulse" />
      </div>
    </div>
  );
};

export const TrendingCoinsFallback = () => {
  const columns: DataTableColumn<number>[] = [
    {
      header: 'Name',
      cellClassName: 'name-cell',
      cell: () => (
        <div className="name-link">
          <div className="name-image skeleton animate-pulse" />
          <div className="name-line skeleton animate-pulse" />
        </div>
      ),
    },
    {
      header: '24h Change',
      cellClassName: 'change-cell',
      cell: () => (
        <div className="price-change">
          <div className="change-icon skeleton animate-pulse" />
          <div className="change-line skeleton animate-pulse" />
        </div>
      ),
    },
    {
      header: 'Price',
      cellClassName: 'price-cell',
      cell: () => <div className="price-line skeleton animate-pulse" />,
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending coins</h4>
      <div className="trending-coins-table">
        <DataTable
          columns={columns}
          data={[1, 2, 3, 4, 5, 6]}
          rowKey={(i) => i}
          tableClassName="trending-coins-table"
          headerCellClassName="py-3!"
          bodyCellClassName="py-2!"
        />
      </div>
    </div>
  );
};
