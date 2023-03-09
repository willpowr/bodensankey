      google.charts.load('current', {
        'packages': ['sankey']
      });
      google.charts.setOnLoadCallback(drawChart);

      const NODES = {
        saleGoods: {
          value: 225747,
          label: `Sale of goods \r\n £225.7M`
        },
        turnover: {
          value: 225747,
          label: 'Turnover £225.7M'
        },
        grossProfit: {
          value: 78363,
          label: 'Gross profit £78.4M'
        },
        operatingProfit: {
          value: 14779,
          label: 'Operating profit £14.8M'
        },
        profitBeforeTax: {
          value: 14852,
          label: 'Profit before taxation 14.9M'
        },
      }

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'From');
        data.addColumn('string', 'To');
        data.addColumn('number', 'Weight');
        data.addColumn({
          type: 'string',
          role: 'style'
        }); // annotation role col.
        data.addRows([
          ['UK & rest of the world £167.6M', NODES.saleGoods.label, 167538, undefined],
          ['USA £58.2M', NODES.saleGoods.label, 58209, undefined],
          [NODES.saleGoods.label, NODES.turnover.label, NODES.saleGoods.value, undefined],
          [NODES.turnover.label, 'Cost of sales £147.3M', 147384, 'color: LightCoral'],
          //[ 'Management fee income', 'Other operating income', 12010 ],
          //[ 'Other income', 'Other operating income', 37 ],
          ['Other operating income £12M', NODES.grossProfit.label, 12047, undefined ],
          [NODES.turnover.label, NODES.grossProfit.label, NODES.grossProfit.value, 'color: MediumSeaGreen'],
          [NODES.grossProfit.label, 'Administrative expenses £75.6M', 75631, 'color: LightCoral'],
          [NODES.grossProfit.label, NODES.operatingProfit.label, NODES.operatingProfit.value, 'color: MediumSeaGreen'],
          //[ 'Interest receivable and similar income', 'Operating profit', 4 ],
          //['Non-operating income £103K', NODES.operatingProfit.label, 99, 'color: MediumSeaGreen'],
          //[NODES.operatingProfit.label, 'Interest payable and similar expenses', 30],
          [NODES.operatingProfit.label, NODES.profitBeforeTax.label, NODES.profitBeforeTax.value, 'color: MediumSeaGreen'],
          [NODES.profitBeforeTax.label, 'Tax on profit £2.9M', 2891, 'color: LightCoral'],
          [NODES.profitBeforeTax.label, 'Profit for financial period £12M', 11961, 'color: MediumSeaGreen']

        ]);

        // Sets chart options.
        var options = {
        'title':'Boden Income Statement Jan 21 - 22',
          margin: 100,
          width: 1500,
          height: 800,
          sankey: {
            node: {
            	allowHtml: true,
            	width: 32,
              label: {
                fontSize: 18
              },
              nodePadding: 100
            }
          },
        };

        // Instantiates and draws our chart, passing in some options.
        var chart = new google.visualization.Sankey(document.getElementById('sankey_basic'));
        chart.draw(data, options);
      }
