class GanntdatesController {
  constructor() {
    this.name = 'ganntdates';

    this.getColor = function(c) {
      if (c > 80) return '#4488ff';
      if (c > 60) return '#2222ff';
      if (c > 40) return 'lightblue';
      if (c > 20) return '#ff99ff';
      return '#dd99dd';
    };


    this.getColorClass = function(c) {
      if (c > 70) return 'success';
      if (c > 50) return 'primary';
      if (c > 30) return 'info';
      if (c > 10) return 'warning';
      return 'error';
    };

  }
}

export default GanntdatesController;
